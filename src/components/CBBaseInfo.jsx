/**
 * This is a custom Front Matter Component that takes the front matter and renders the api data
 */
import React from "react";
import useFrontMatter from "./useFrontMatter";

const CBBaseInfo = () => {
  const frontMatter = useFrontMatter();

  let functionSignature = "";
  let parameters = frontMatter.cbparameters.parameters
    .map((param) => `${param.name}: ${param.typeName}`)
    .join(", ");
  let returnType = frontMatter.cbparameters.returns.signatureTypeName;
  if (
    frontMatter.cbparameters.returns.typeArgs &&
    frontMatter.cbparameters.returns.typeArgs.length > 0
  ) {
    let typeArg = frontMatter.cbparameters.returns.typeArgs[0];
    returnType = `${returnType}<${typeArg.name}>`;
  }
  if (frontMatter.data) {
    functionSignature = `codebolt.${frontMatter.data.category}.${frontMatter.data.name}(${parameters}): ${returnType}`;
  }
 
  return (
    <div>
      {Object.entries(frontMatter).map(([key, value]) => {
        if (key === "cbbaseinfo") {
          // console.log(`Key: ${key}, Value: ${value}`);

          return (
            <div className="cbbaseinfo">
              {frontMatter.data ? (
                <pre>
                  <code>{functionSignature}</code>
                </pre>
              ) : null}
              <div key={key}>{value.description}</div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default CBBaseInfo;
