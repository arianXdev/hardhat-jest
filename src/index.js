const { task, subtask, types } = require("hardhat/config");
const { TASK_COMPILE } = require("hardhat/builtin-tasks/task-names");
const { run: jestRun, runCLI } = require("jest");
const { readFile, writeFile } = require("fs").promises;

let projectRootPath;
let verboseStatus;

const dotconfigPath = `${__dirname}/../.config`;

task("jest", "Runs Jest tests")
	.addFlag("noCompile", "Do NOT compile before running this task.")
	.addFlag(
		"watch",
		"Watch files for changes and rerun tests related to changed files."
	)
	.addFlag("watchAll", "Watch files for changes and rerun all tests.")
	.addFlag("bail", "Stop running tests after the first test failure.")
	.addFlag("showConfig", "Print your jest config and then exits.")
	.addOptionalParam(
		"useVerbose",
		"Display individual test results with the test suite hierarchy. | Enable / Disable [boolean] (default: false)",
		undefined,
		types.boolean
	)
	.addOptionalVariadicPositionalParam(
		"testFiles",
		"An optional list of files to test"
	)
	.setAction(async (taskArgs, { run }) => {
		const {
			watch: watchFlag,
			watchAll: watchAllFlag,
			noCompile: noCompileFlag,
			bail: bailFlag,
			useVerbose,
			showConfig,
			testFiles,
		} = await taskArgs;

		projectRootPath = [config.paths.root];

		// If --no-compile flag is added, then don't compile before running this task
		if (!noCompileFlag && !showConfig) {
			await run(TASK_COMPILE, { quiet: true });
		}

		// If --show-config is added, it prints the jest config and then exits
		showConfig ? await run("jest:showConfig") : null;

		// if --use-verbose value is used, then run changeVerbose suntask to change verbose status
		useVerbose != undefined
			? await run("jest:changeVerbose", { useVerbose })
			: null;

		// Read and set verbose status from .config file
		verboseStatus = (await readFile(dotconfigPath, "utf8")).includes(
			"true"
		);

		testFiles
			? await run("jest:runSpecificFiles", { testFiles })
			: await run("jest:run", { watchFlag, watchAllFlag, bailFlag });
	});

subtask("jest:run").setAction(async ({ watchFlag, watchAllFlag, bailFlag }) => {
	const jestOptions = {
		setupFiles: ["hardhat/register"],
		watch: watchFlag,
		watchAll: watchFlag ? undefined : watchAllFlag,
		bail: bailFlag,
		verbose: verboseStatus,
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

subtask("jest:changeVerbose", async ({ useVerbose: verbose }) => {
	await writeFile(dotconfigPath, `verbose: ${verbose}`);
});

subtask("jest:runSpecificFiles", async ({ testFiles }) => {
	let files = testFiles.map((item) => `${projectRootPath}/` + item);
	await jestRun(["--testPathPattern", ...files]);
});
