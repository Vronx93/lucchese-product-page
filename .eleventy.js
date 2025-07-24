const dotenv = require("dotenv");

const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env";
dotenv.config({ path: envFile });


module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("env", process.env);
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "data",
      output: "public/dist",
    },
    templateFormats: ["liquid", "html"],
  };
};
