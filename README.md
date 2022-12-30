# hardhat-jest

Have you always wanted to use **Jest** instead of Mocha + Chai in your Hardhat Projects? 😉 Good News!

`hardhat-jest` allows you to use **Jest** easily 😃✌️


- [Installation](#installation)
- [Usage](#usage)
  - [Options](#options): See all the available options
  - [Hardhat Tasks](#hardhat-tasks): See all the Hardhat tasks


## Installation

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
Usage: hardhat [GLOBAL OPTIONS] jest [--no-compile] [--watch] [--watch-all]

OPTIONS:

  --no-compile	Do NOT compile before running this task 
  --watch     	Watch files for changes and rerun tests related to changed files. 
  --watch-all 	Watch files for changes and rerun all tests 

jest: Runs Jest tests

For global options help run: hardhat help
```

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
