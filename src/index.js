const { task, subtask } = require("hardhat/config");
const { TASK_COMPILE } = require("hardhat/builtin-tasks/task-names");
const { runCLI } = require("jest");

let projectRootPath;

task("jest", "Runs Jest tests")
	.addFlag("noCompile", "Do NOT compile before running this task.")
	.addFlag(
		"watch",
		"Watch files for changes and rerun tests related to changed files."
	)
	.addFlag("watchAll", "Watch files for changes and rerun all tests.")
	.addFlag("bail", "Stop running tests after the first test failure.")
	.addFlag("showConfig", "Print your jest config and then exits.")
	.setAction(async (taskArgs, { run }) => {
		const {
			watch: watchFlag,
			watchAll: watchAllFlag,
			noCompile: noCompileFlag,
			bail: bailFlag,
			showConfig,
		} = await taskArgs;

		projectRootPath = [config.paths.root];

		// If --no-compile flag is added, then don't compile before running this task
		if (!noCompileFlag && !showConfig) {
			await run(TASK_COMPILE, { quiet: true });
		}

		// If --show-config is added, it prints the jest config and then exits
		showConfig ? await run("jest:showConfig") : null;

		// Call suntask jest:run
		await run("jest:run", { watchFlag, watchAllFlag, bailFlag });
	});

subtask("jest:run").setAction(async ({ watchFlag, watchAllFlag, bailFlag }) => {
	const jestOptions = {
		setupFiles: ["hardhat/register"],
		watch: watchFlag,
		watchAll: watchFlag ? undefined : watchAllFlag,
		bail: bailFlag,
		testTimeout: 50000,
	};

	await runCLI(jestOptions, projectRootPath)
		.then((result) => result)
		.catch((error) => console.error(error));
});

subtask("jest:showConfig").setAction(async () => {
	await runCLI(
		{ setupFiles: ["hardhat/register"], showConfig: true },
		projectRootPath
	)
		.then((result) => result)
		.catch((error) => console.error(error));
});
