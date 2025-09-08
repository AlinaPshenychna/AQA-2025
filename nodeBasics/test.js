import chalk from "chalk"
import { passed, failed, flaky } from "./constants.js";
import testsTitles from "./testTitles.js";

//if needs export many const
//import * as stats from "./constants.js"        stats.failed

console.log(chalk.blue("Test run has finished"));
console.log(chalk.green("Passed:", passed));
console.log(chalk.red("Failed:", failed));
console.log(chalk.yellow("Flaky:", flaky));
console.log(testsTitles.test1);
console.log(testsTitles.test2);
