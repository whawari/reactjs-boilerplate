let KEYS;

if (process.env.NODE_ENV === "development") {
  KEYS = require("config/dev");
} else {
  KEYS = require("config/prod");
}

export default KEYS;
