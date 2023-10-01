const { execSync } = require("child_process");
require("dotenv").config();

const nodeEnv = process.env.NODE_ENV;

if (nodeEnv === "development") {
  console.log("Installing Husky hooks...");
  execSync("npx husky install", { stdio: "inherit" });
} else {
  console.log('NODE_ENV is not set to "development"; skipping Husky install.');
}
