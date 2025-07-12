// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      input: "src",
      includes: "includes",
      data: "data",
      output: "dist",
    },
    htmlTemplateEngine: "liquid",
  };
};
