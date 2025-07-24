const dotenv = require("dotenv");

const envFile = process.env.NODE_ENV === "production" ? ".env.prod" : ".env";
dotenv.config({ path: envFile });


module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "data",
      output: "public/dist",
    },
    templateFormats: ["liquid", "html"],
        data: {
      env: process.env,
    },
  };
};
