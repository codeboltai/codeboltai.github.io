
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
      "label": categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
      "position": 2.5,
      "collapsible": true,
      "collapsed": true,
      "className": "red",
      "link": {
        "type": "doc",
        "id": "cb_index"
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
      let newYamlContent = updateFrontmatter(frontMatterContent, { "data": frontMatterVars.data, "cbbaseinfo": frontMatterVars.cbbaseinfo, "cbparameters": frontMatterVars.cbparameters });
      newFileContent = originalfileContent.replace(frontMatterMatch[0], `---\n${newYamlContent}---`);
    } else {
      const frontMatter = createFrontMatter({ "data": frontMatterVars.data, "cbbaseinfo": frontMatterVars.cbbaseinfo, "cbparameters": frontMatterVars.cbparameters  });
      newFileContent = frontMatter + originalfileContent;
    }
    fs.writeFileSync(filePath, newFileContent);
  } else {
    const frontMatter = createFrontMatter({ "data": frontMatterVars.data, "cbbaseinfo": frontMatterVars.cbbaseinfo, "cbparameters": frontMatterVars.cbparameters  });
    newFileContent = frontMatter + "<CBBaseInfo/> \n <CBParameters/>";
    fs.writeFileSync(filePath, newFileContent);
  }
}

function writeClassIndex(categoryName, indexFilePath, classAllFrontMatters) {
  let classIndexContent = '---\n';
  classIndexContent += `${yaml.dump({ cbapicategory: classAllFrontMatters.map(frontMatter => ({
    name: frontMatter.data.name,
    link: frontMatter.data.name,
    description: frontMatter.cbbaseinfo.description
  }))})}\n`;
  classIndexContent += `---\n# ${categoryName}\n<CBAPICategory />\n`;
  fs.writeFileSync(indexFilePath, classIndexContent);
}

// function writeAPIIndex(){

// }

// let allClasses = [];
// let classDetails = {
//   "name": " ",
//   "description": " ",
//   "link": " "
// };


if (codeboltChild && codeboltChild.children) {
  codeboltChild.children.forEach(CbProperties => {

    // classDetails.name = CbProperties.name;
    // classDetails.description = CbProperties.comment && CbProperties.comment.summary && CbProperties.comment.summary.length > 0 ? CbProperties.comment.summary[0].text : ' ';
    // classDetails.link = `${CbProperties.name}`;


    const dir = `../docs/api/${CbProperties.name}`;

    let classAllFrontMatters = [];

    //Check Folder
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    //Create Category
    const categoryFilePath = `${dir}/_category_.json`;
    createCategoryFile(categoryFilePath, CbProperties.name);

    
    if (CbProperties.type && CbProperties.type.declaration && CbProperties.type.declaration.children) {
      CbProperties.type.declaration.children.forEach(CbFunctions => {


        let frontMatterVars = {
          "data": {
            "name": " ",
            "category": " ",
            "link": " "
          },
          "cbbaseinfo": {
            "description": " ",
          },
          "cbparameters": {
            "parameters": [],
            "returns": {
              "signatureTypeName": " ",
              "description": " ",
              "typeArgs": []
            }
          }
        }

        let returnArgObj = {
          "type": " ",
          "name": " "
        }
    
        let parameterObj = {
          "name": " ",
          "typeName": " ",
          "description": " "
        }

        frontMatterVars.data.category = CbProperties.name;
        frontMatterVars.data.name = CbFunctions.name;
        frontMatterVars.cbbaseinfo.description = CbFunctions.comment && CbFunctions.comment.summary && CbFunctions.comment.summary.length > 0 ? CbFunctions.comment.summary[0].text : ' ';


        if (CbFunctions.comment && CbFunctions.comment.blockTags) {
          CbFunctions.comment.blockTags.forEach(blockTag => {
            if (blockTag.tag === "@returns") {
              frontMatterVars.cbparameters.returns.description = blockTag.content && blockTag.content.length > 0 ? blockTag.content[0].text : ' ';
            }
          });
        }

        // Function Signature of Input and Output
        if (CbFunctions.type && CbFunctions.type.declaration && CbFunctions.type.declaration.signatures) {
          CbFunctions.type.declaration.signatures.forEach(signature => {
            // Input Parameters
            if (signature.parameters) {
              signature.parameters.forEach(param => {
                parameterObj = {
                  "name": param.name,
                  "typeName": param.type.name,
                  "description": param.comment && param.comment.summary && param.comment.summary.length > 0? param.comment.summary[0].text :''
                }
                frontMatterVars.cbparameters.parameters.push(parameterObj);
              });
            }

            //Output Parameters
            if (signature.type) {
              frontMatterVars.cbparameters.returns.signatureTypeName = signature.type.name;
              if (signature.type.typeArguments) {
                signature.type.typeArguments.forEach(typeArg => {
                  if(typeArg.elementType){
                    returnArgObj = {
                      "type": typeArg.type,
                      "name": typeArg.elementType.name
                    }
                  } else if(typeArg.name){
                    returnArgObj = {
                      "type": typeArg.type,
                      "name": typeArg.name
                    }
                  }
                  frontMatterVars.cbparameters.returns.typeArgs.push(returnArgObj);
                });
              }
            }
          });
        }

        
        frontMatterVars.data.link = `${frontMatterVars.data.name}.md`;
        const fileurl = `${dir}/${frontMatterVars.data.name}.md`;
        writeToFile(fileurl, frontMatterVars)

        classAllFrontMatters.push(frontMatterVars);
      });
    }

    const classIndexFilePath = `${dir}/cb_index.md`;
    writeClassIndex(CbProperties.name, classIndexFilePath, classAllFrontMatters)

  });
} else {
  console.log('codeboltChild has no children or does not exist.');
}




