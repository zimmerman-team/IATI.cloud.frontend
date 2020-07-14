const { RemoteBrowserTarget } = require("happo.io");

// const domain = "https://store.staging.iati.cloud/";
const domain = "http://localhost:3000/";

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  prerender: false,
  project: "iati-cloud-front-end",
  targets: {
    "chrome-desktop": new RemoteBrowserTarget("chrome", {
      viewport: "1440x1024",
    }),
  },

  // githubApiUrl: "https://api.github.com",

  pages: [
    { url: domain, title: "landing" },
    { url: domain + "about", title: "about" },
    { url: domain + "querybuilder", title: "about" },
    { url: domain + "documentation/introduction", title: "documentation" },
  ],
};
