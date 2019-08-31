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
  plugins: ['vue-demo'],  
  markdown: {
    plugins: [
      "fontawesome",
      "codesandbox",
      "block-embed"
    ],
    extendMarkdown: md => {
      md.set({ breaks: true });
      md.use(require("markdown-it-mermaid").default);
      // md.use(require('markdown-it-xxx'))
    }
  },
  themeConfig: {
    sidebar: [
      "/",
      "/circleci.md",
      "/fire.md",
      "/git.md",
      "/javascript.md",
      "/nuxt.md",
      "/releases.md",
      "/vscode.md",
      "/vue.md",
      "/vue-plugins.md",
      "/vue-testing.md",
      "/vue2-editor.md",
      "/vuepress.md",
      "/vuexfire.md"
    ]
  }
};
