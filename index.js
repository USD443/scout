import boxen from "boxen";
import { detectDb } from "./auth/detectDb.js";
import { oraPromise } from "ora";
import chalk from "chalk";

(async () => {
  console.clear();
  console.log(
    boxen(chalk.blue("Welcome to Scout\nCreated by: Carlos Rodriguez"), {
      padding: 1,
      textAlignment: "center",
      borderColor: "blue",
      margin: { bottom: 1 },
    })
  );

  try {
    const res = await oraPromise(detectDb, {
      text: "Checking for database",
      successText: chalk.green("Database file found!"),
      failText: chalk.red(
        "Error locating database file. Make sure one exists or create one"
      ),
    });
    console.log(chalk.green(`Found and loaded ${chalk.bold(res)}!\n`));
  } catch (error) {
    console.log(chalk.yellow(error));
  }
})();
