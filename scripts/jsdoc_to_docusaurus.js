
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
  let frontMatterString = yaml.dump(frontMatter);
  return `---\n${frontMatterString}---\n`;
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


function writeToFile(filePath, frontMatterVars){
  let originalfileContent = '';
  let newFileContent = '';

  if (fs.existsSync(filePath)) {
    originalfileContent = fs.readFileSync(filePath, 'utf8');
    const frontMatterMatch = originalfileContent.match(/^---\n([\s\S]*?)\n---/);
    if (frontMatterMatch) {
      const frontMatterContent = frontMatterMatch[1];
      let newYamlContent = updateFrontmatter(frontMatterContent, { "cbbaseinfo": frontMatterVars.cbbaseinfo, "cbparameters": frontMatterVars.cbparameters });
      newFileContent = originalfileContent.replace(frontMatterMatch[0], `---\n${newYamlContent}---`);
    } else {
      const frontMatter = createFrontMatter({ name: frontMatterVars.data.name, "cbbaseinfo": frontMatterVars.cbbaseinfo, "cbparameters": frontMatterVars.cbparameters  });
      newFileContent = frontMatter + originalfileContent;
    }
    fs.writeFileSync(filePath, newFileContent);
  } else {
    const frontMatter = createFrontMatter({ name: frontMatterVars.data.name, "cbbaseinfo": frontMatterVars.cbbaseinfo, "cbparameters": frontMatterVars.cbparameters  });
    newFileContent = frontMatter + "<CBBaseInfo/> \n <CBParameters/>";
    fs.writeFileSync(filePath, newFileContent);
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

    let frontMatterVars = {
      "data": {
        "name": " ",
        "category": " ",
      },
      "cbbaseinfo": {
        "description": " ",
      },
      "cbparameters": {
        "parameters": [],
        "returns": {
          "signatureTypeName": " "
        }
      }
    }

    let parameterObj = {
      "name": " ",
      "typeName": " ",
      "description": " "
    }




    if (CbProperties.type && CbProperties.type.declaration && CbProperties.type.declaration.children) {
      CbProperties.type.declaration.children.forEach(CbFunctions => {

        frontMatterVars.data.category = CbProperties.name;
        frontMatterVars.data.name = CbFunctions.name;
        frontMatterVars.cbbaseinfo.description = CbFunctions.comment && CbFunctions.comment.summary && CbFunctions.comment.summary.length > 0 ? CbFunctions.comment.summary[0].text : ' ';
        

        if (CbFunctions.type && CbFunctions.type.declaration && CbFunctions.type.declaration.signatures) {
          CbFunctions.type.declaration.signatures.forEach(signature => {
            if (signature.parameters) {
              signature.parameters.forEach(param => {
                parameterObj = {
                  "name": param.name,
                  "typeName": param.type.name,
                  "description": param.comment && param.comment.text && param.comment.text.length > 0? param.comment.text[0].text :''
                }
                frontMatterVars.cbparameters.parameters.push(parameterObj);
              });
            }
            frontMatterVars.cbparameters.returns.signatureTypeName = signature.type.name;
          });
        }


        const filePath = `${dir}/${frontMatterVars.data.name}.md`;
        writeToFile(filePath, frontMatterVars)

      });
    }
  });
} else {
  console.log('codeboltChild has no children or does not exist.');
}




