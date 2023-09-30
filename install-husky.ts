const { execSync } = require("child_process");

const nodeEnv = process.env.NODE_ENV;

if (nodeEnv === "development") {
  console.log("Installing Husky hooks...");
  execSync("husky install", { stdio: "inherit" });
} else {
  console.log('NODE_ENV is not set to "development"; skipping Husky install.');
}
