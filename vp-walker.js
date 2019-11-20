const dirTree = require("directory-tree");
// let sidebarArray = [];

const groupObj = {
  title: "Vue",
  children: ["/vue/plugins", "/vue/testing"]
};

const docs = dirTree("docs")
  .children.filter(item => item.name !== ".vuepress")
  .map(handleMarkdownFile);

const generateSidebarNav = () =>
  docs.map(item => {
    if (item.type === "file" && item.extension === ".md") return item.path;
    else {
      const groupFiles = item.children.map(handleMarkdownFile);
      const childrenPathsArray = groupFiles.map(file => file.path);

      return {
        title: titleCase(item.name),
        children: childrenPathsArray
      };
    }
  });

console.log("TCL: generateSidebarNav", generateSidebarNav);

function handleMarkdownFile(item) {
  item.path = item.path
    .replace("docs", "")
    .replace(".md", "")
    .replace("README", "")
    .replace("index", "");

  return item;
}

function titleCase(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

exports.generateSidebarNav = generateSidebarNav;
exports.handleMarkdownFile = handleMarkdownFile;
exports.docsDirArray = docs;
