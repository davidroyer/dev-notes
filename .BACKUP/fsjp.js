const jetpack = require("fs-jetpack");

const docsDir = jetpack.cwd("docs");

console.log(docsDir.find("", { matching: "**/*.md" }));
