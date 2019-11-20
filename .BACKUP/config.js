const { fs, path } = require("@vuepress/shared-utils");
const {
  generateSidebarNav,
  generateVPressSidebar
} = require("../../vpress-navinator");

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
      // md.use(require('markdown-it-xxx'))
    }
  },
  themeConfig: {
    sidebar: generateVPressSidebar()
  }
};

function getSidebar() {
  return fs
    .readdirSync(path.resolve(__dirname, "../"))
    .filter(filename => filename.indexOf(".md") >= 0)
    .map(filename => {
      // remove the file extension
      filename = filename.slice(0, -3);

      if (filename.indexOf("index") >= 0 || filename.indexOf("README") >= 0) {
        filename = "/";
      }
      return filename;
    })
    .sort();
}
