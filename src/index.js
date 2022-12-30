const { task, subtask } = require("hardhat/config");
const { TASK_COMPILE } = require("hardhat/builtin-tasks/task-names");
const { runCLI } = require("jest");

task("jest", "Runs Jest tests")
	.addFlag("noCompile", "Do NOT compile before running this task.")
	.addFlag(
		"watch",
		"Watch files for changes and rerun tests related to changed files."
	)
	.addFlag("watchAll", "Watch files for changes and rerun all tests.")
	.addFlag("bail", "Stop running tests after the first test failure.")
	.setAction(async (taskArgs, { run }) => {
		const {
			watch: watchFlag,
			watchAll: watchAllFlag,
			noCompile: noCompileFlag,
			bail: bailFlag,
		} = await taskArgs;

		// If --no-compile flag is added, then don't compile before running this task
		if (!noCompileFlag) {
			await run(TASK_COMPILE, { quiet: true });
		}

		// Call suntask jest:run
		await run("jest:run", { watchFlag, watchAllFlag, bailFlag });
	});

subtask("jest:run").setAction(async ({ watchFlag, watchAllFlag, bailFlag }) => {
	const projectRootPath = [config.paths.root];

	const jestOptions = {
		watch: watchFlag,
		watchAll: watchFlag ? undefined : watchAllFlag,
		bail: bailFlag,
	};

	await runCLI(jestOptions, projectRootPath)
		.then((result) => result)
		.catch((error) => console.error(error));
});
