import React from "react";
import useFrontMatter from "./useFrontMatter";

const CBParameters = () => {
  const frontMatter = useFrontMatter();
  const formatReturnType = (returns) => {
    if (!returns || !returns.signatureTypeName) return "";

    if (returns.typeArgs && returns.typeArgs.length > 0) {
      const typeArg = returns.typeArgs[0];
      switch (typeArg.type) {
        case "array":
          return "[ ]";
        case "void":
          return "void";
          case "intrinsic":
          return "";
          case "reference":
            return "";
        default:
          return `${returns.signatureTypeName}<${typeArg.name}>`;
      }
    } else {
      // Handle no typeArgs or unsupported types
      return returns.signatureTypeName;
    }
  };

  return (
    <div style={{marginTop: '1rem'}}>
      {Object.entries(frontMatter).map(([key, value]) => {
        if (key === "cbparameters") {
          const hasParameters = value.parameters && value.parameters.length > 0;
          const hasReturns =
            value.returns &&
            value.returns.signatureTypeName &&
            value.returns.description &&
            value.returns.typeArgs &&
            value.returns.typeArgs.length > 0 &&
            value.returns.typeArgs[0].name;

          return (
            <div>
              {hasParameters && (
                <div>
                  <h3>Parameters</h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {value.parameters.map((param, index) => (
                        <tr key={index}>
                          <td>{param.name}</td>
                          <td>{param.typeName}</td>
                          <td>{param.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {hasReturns && (
                <div>
                  <h3>Returns:</h3>
                  <pre>
                    <code>
                    {" "}
                    {`${value.returns.signatureTypeName}<${
                      value.returns.typeArgs[0].name || ""
                    }${formatReturnType(value.returns)}>`}
                    </code>
                  </pre>

                  {value.returns.description}
                </div>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CBParameters;
