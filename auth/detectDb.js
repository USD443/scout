import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const detectDb = () => {
  return new Promise((resolve, reject) => {
    // Check for database directory - Create if not exist
    if (!fs.existsSync(join(__dirname, "../db"))) {
      fs.mkdirSync(join(__dirname, "../db"));
    }

    // Look for database file - File extension .db or .sqlite
    fs.readdir(join(__dirname, "../db"), (err, files) => {
      if (err || files.length < 1) {
        reject("WARNING: No database loaded!");
      }
      const loadedDb = files.find((file) => {
        return file.split(".")[1] === "db" || file.split(".")[1] === "sqlite";
      });

      resolve(loadedDb);
    });
  });
};
