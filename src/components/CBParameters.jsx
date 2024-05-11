import React from "react";
import useFrontMatter from "./useFrontMatter";

const CBParameters = () => {
  const frontMatter = useFrontMatter();

  return (
    <div>
      {Object.entries(frontMatter).map(([key, value]) => {
        if (key === "cbparameters") {
          const hasParameters = value.parameters && value.parameters.length > 0;
          const hasReturns = value.returns && value.returns.signatureTypeName && value.returns.description;

          return (
            <div>
              {hasParameters && (
                <div>
                  <h3>Parameters</h3>
                  <table className="table" >
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
                  <h3>Returns</h3>
                  <table className="table" >
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{value.returns.signatureTypeName}</td>
                        <td>{value.returns.description}</td>
                      </tr>
                    </tbody>
                  </table>
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
