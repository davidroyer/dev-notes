module.exports = {
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
        // integrity: 'sha384-xxx',
        // crossorigin: 'anonymous'
      }
    ]
  ],  
  title: "DevNotes",
  description: "Developer Notes for David Royer",
  markdown: {
    plugins: [
      'fontawesome', // equals to @org/markdown-it-foo if exists
      // 'fontawesome', // equals to @org/markdown-it-foo if exists
      // ['markdown-it-bar', {
      //   // provide options here
      // }]
    ],
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-mermaid').default);
      // md.use(require('markdown-it-xxx'))
    }
  },  
  themeConfig: {
    sidebar: [
    "/",
    "/git.md",
    "/vscode.md",
    "/vue-testing.md",
    "/vue-plugins.md",
    "/vuepress.md",
    "/releases.md",
    "/vue2-editor.md"
  ]
  }
};
