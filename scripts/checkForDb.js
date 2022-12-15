const fs = require("fs");
const path = require("path");

function checkForDb() {
  return new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname, "../db"), (err, files) => {
      if (err) {
        reject("No database loaded!");
      }
      const dbName = files.find(
        (file) => file.split(".")[1] === "db" || file.split(".")[1] === "sqlite"
      );
      resolve(dbName);
    });
  });
}

module.exports = checkForDb;
