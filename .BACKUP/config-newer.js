const { fs, path } = require("@vuepress/shared-utils");
const { generateVPressSidebar } = require("../../vpress-navinator");

module.exports = {
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        // integrity: 'sha384-xxx',
        // crossorigin: 'anonymous'
      }
    ]
  ],
  title: "DevNotes",
  description: "Developer Notes for David Royer",
  plugins: ["vue-demo"],
  markdown: {
    plugins: ["fontawesome", "codesandbox", "block-embed"],
    extendMarkdown: md => {
      md.set({ breaks: true });
      md.use(require("markdown-it-mermaid").default);
    }
  },
  themeConfig: {
    sidebar: generateVPressSidebar()
  }
};
