
const fs = require('fs');

let rawdata = fs.readFileSync('../temp/out.json');
let outJson = JSON.parse(rawdata);
console.log("Json Parsed");

const codeboltChild = outJson.children[0].children.find(child => child.name === "Codebolt");

fs.writeFileSync('../temp/newfile.json', JSON.stringify(codeboltChild, null, 2));


if (codeboltChild && codeboltChild.children) {
  codeboltChild.children.forEach(CbProperties => {
    const dir = `../docs/api/${CbProperties.name}`;
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(`${dir}/_category_.json`, JSON.stringify({
      "label": CbProperties.name,
      "position": 2.5,
      "collapsible": true,
      "collapsed": true,
      "className": "red",
        "link": {
        "type": "generated-index",
        "title": CbProperties.name,
        "description": "Provides Functionality for "+CbProperties.name
      }
    }, null, 2));
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
            
            fs.writeFileSync(`${dir}/${CbFunctions.name}.md`, content + '\n' + description + '\n' + parameterNames.join('\n') + "\n"+ returndata);
        });
    }
  });
} else {
  console.log('codeboltChild has no children or does not exist.');
}




