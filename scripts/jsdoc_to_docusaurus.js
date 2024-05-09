
const fs = require('fs');
const yaml = require('js-yaml');

let rawdata = fs.readFileSync('../temp/out.json');
let outJson = JSON.parse(rawdata);
console.log("Json Parsed");

const codeboltChild = outJson.children[0].children.find(child => child.name === "Codebolt");

fs.writeFileSync('../temp/newfile.json', JSON.stringify(codeboltChild, null, 2));


function updateFrontmatter(existingFrontmatter, additionalFrontmatter) {
  let frontMatter = yaml.load(existingFrontmatter);
  let newfront = { ...frontMatter, ...additionalFrontmatter }
  return yaml.dump(newfront);
}

function createFrontMatter(frontMatter) {
  let frontMatterString = `---\ntitle: ${frontMatter.name}\ndescription: ${frontMatter.description}\n---\n`
  return frontMatterString;
}

function createCategoryFile(categoryPath, categoryName) {
  if (!fs.existsSync(categoryPath)) {
    fs.writeFileSync(categoryPath, JSON.stringify({
      "label": categoryName,
      "position": 2.5,
      "collapsible": true,
      "collapsed": true,
      "className": "red",
      "link": {
        "type": "generated-index",
        "title": categoryName,
        "description": "Provides Functionality for " + categoryName
      }
    }, null, 2));
  }
}

if (codeboltChild && codeboltChild.children) {
  codeboltChild.children.forEach(CbProperties => {
    const dir = `../docs/api/${CbProperties.name}`;

    //Check Folder
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    //Create Category
    const categoryFilePath = `${dir}/_category_.json`;
    createCategoryFile(categoryFilePath, CbProperties.name);


    if (CbProperties.type && CbProperties.type.declaration && CbProperties.type.declaration.children) {
      CbProperties.type.declaration.children.forEach(CbFunctions => {
        let content = `${CbProperties.name} - ${CbFunctions.name}\n`;
        let description = CbFunctions.comment && CbFunctions.comment.summary && CbFunctions.comment.summary.length > 0 ? CbFunctions.comment.summary[0].text : '';
        let returndata = "";
        let parameterNames = [];
        if (CbFunctions.type && CbFunctions.type.declaration && CbFunctions.type.declaration.signatures) {
          CbFunctions.type.declaration.signatures.forEach(signature => {
            if (signature.parameters) {
              signature.parameters.forEach(param => {
                parameterNames.push(`${param.name}: ${param.type.name}`);
                console.log(`${param.name}: ${param.type.name}`);
              });
            }
            returndata = `Returns: ${signature.type.name}\n`;
          });
        }

        const filePath = `${dir}/${CbFunctions.name}.md`;
        let originalfileContent = '';
        let newFileContent = '';

        if (fs.existsSync(filePath)) {
          originalfileContent = fs.readFileSync(filePath, 'utf8');
          const frontMatterMatch = originalfileContent.match(/^---\n([\s\S]*?)\n---/);
          if (frontMatterMatch) {
            const frontMatterContent = frontMatterMatch[1];
            let newYamlContent = updateFrontmatter(frontMatterContent, { "cblibrary": { "description": description } })
            newFileContent = originalfileContent.replace(frontMatterMatch[0], `---\n${newYamlContent}---`);
          } else {
            const frontMatter = createFrontMatter({ name: CbFunctions.name, description: description });
            newFileContent = frontMatter + originalfileContent;
          }
          fs.writeFileSync(filePath, newFileContent);
        } else {
          const frontMatter = createFrontMatter({ name: CbFunctions.name, description: description });
          newFileContent = frontMatter + `${content}\n${parameterNames.join('\n')}\n${returndata} <CBBaseInfo/>`;
          fs.writeFileSync(filePath, newFileContent);
        }
      });
    }
  });
} else {
  console.log('codeboltChild has no children or does not exist.');
}




