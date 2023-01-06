# hardhat-jest

<a href="https://npmjs.com/package/hardhat-jest" target="_blank">
	<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
	<img src="https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black"/>
	<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
	<img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white"/>
</a>

<a style="display: block" target="_blank" href="https://npmjs.com/package/hardhat-jest"><img
    src="https://github.com/RyanHosseini/hardhat-jest/blob/main/hardhat-jest.png"
    width='1200"' /></a>
[![Npm package version](https://badgen.net/npm/v/hardhat-jest)](https://npmjs.com/package/hardhat-jest)

> **Warning**:
> If you're using < v1.0.6, Please update the package to the latest version ASAP! It may cause errors.

Have you always wanted to use **Jest** instead of Mocha + Chai in your Hardhat Projects? 😉 Good News!

`hardhat-jest` allows you to use **Jest** easily 😃✌️

-   [Installation](#installation)
-   [Usage](#usage)
    -   [Options](#options): See all the available options
    -   [Hardhat Tasks](#hardhat-tasks): See all the Hardhat tasks

## Installation

First of all, Make sure that you have `jest` already installed!

**Step 1:** Install the package

```
npm i hardhat-jest
```

**Step 2:** Add to your `hardhat.config.js` file

```
require("hardhat-jest");
```

If you're using Typescript, to your `hardhat.config.ts` file

```
import "hardhat-jest"; // Typescript
```

## Usage

It's so easy, You can run your Jest tests by

```
npx hardhat jest
```

You've been using `npx hardhat test` to run your Mocha tests so far, but NOW you only need to use `jest` instead of `test` and Done!

### Options

If you're looking to see all the options, you can do it by running `npx hardhat help jest`:

```shell
Usage: hardhat [GLOBAL OPTIONS] jest [--bail] [--no-compile] [--show-config] [--use-verbose <BOOLEAN>] [--watch] [--watch-all]

OPTIONS:

  --bail       	Stop running tests after the first test failure.
  --no-compile 	Do NOT compile before running this task.
  --show-config	Print your jest config and then exits.
  --watch      	Watch files for changes and rerun tests related to changed files.
  --watch-all  	Watch files for changes and rerun all tests.
  --use-verbose	Display individual test results with the test suite hierarchy. | Enable / Disable [boolean] (default: false)


jest: Runs Jest tests

For global options help run: hardhat help
```

to use options, you can easily run

```shell
npx hardhat jest <option-name>

// for example
npx hardhat jest --no-compile --watch
```

#### --use-verbose

If you want Jest to display individual test results with the test suite hierarchy, you can use `--use-verbose` this way:

```
npx hardhat jest --use-verbose true // enables verbose mode only for this project

npx hardhat jest --use-verbose false // disables verbose mode for the project
```

Remember: the default value is `false` and disabled, so you must enable it if you want.

### Hardhat-tasks

You can see all the available Hardhat tasks by running `npx hardhat`

```shell
AVAILABLE TASKS:

  check             	Check whatever you need
  clean             	Clears the cache and deletes all artifacts
  compile           	Compiles the entire project, building all artifacts
  console           	Opens a hardhat console
  coverage          	Generates a code coverage report for tests
  flatten           	Flattens and prints contracts and their dependencies
  gas-reporter:merge
  help              	Prints this message
> jest                  Runs Jest tests
  node              	Starts a JSON-RPC server on top of Hardhat Network
  run               	Runs a user-defined script after compiling the project
  test              	Runs mocha tests
  typechain         	Generate Typechain typings for compiled contracts
  verify            	Verifies contract on Etherscan
```

and There it is, `jest` task is added successfully! it means that you can run **`npx hardhat jest`** and your tests will be run!

## Final thoughts

Finally, show us some love by **starring** the repository on GitHub!️ 😊

Happy hacking!
