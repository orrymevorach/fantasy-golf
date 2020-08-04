const path = require("path");
const { env } = require("./env");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env,
};
