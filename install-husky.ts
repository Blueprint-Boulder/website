const { execSync } = require("child_process");
require("dotenv").config();

const nodeEnv = process.env.NODE_ENV || "development";

if (nodeEnv === "development") {
  console.log("Installing Husky hooks...");
  execSync("npx husky install", { stdio: "inherit" });
} else {
  console.log(`NODE_ENV is set to "${nodeEnv}"; skipping Husky install.`);
}
