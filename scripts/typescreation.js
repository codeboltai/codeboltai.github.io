
const fs = require('fs');
const yaml = require('js-yaml');

let rawdata = fs.readFileSync('../temp/out.json');
let outJson = JSON.parse(rawdata);

const codeboltChild = outJson.children[0].children.find(child => child.name === "Codebolt");

console.log(outJson.children[1].sources[0])