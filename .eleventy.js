
module.exports = function (eleventyConfig) {
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
