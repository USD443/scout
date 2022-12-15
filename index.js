const { Sequelize } = require("sequelize");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const checkForDb = require("./scripts/checkForDb");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/test.db",
});

(async () => {
  console.clear();
  console.log("Welcome to Scout\nCreated by: Carlos Rodriguez\n");

  try {
    const res = await checkForDb();
    console.log(`Successfully connected to ${res}\n`);
  } catch (error) {
    console.error(`${error}\n`);
  }

  prompt({
    type: "list",
    message: "What would you like to do?",
    name: "menu",
    choices: [
      "Search database for student records",
      "Create/Update database",
      "Settings",
      "Exit",
    ],
  });
})();
