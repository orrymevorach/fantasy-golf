const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  publicRuntimeConfig: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
};
