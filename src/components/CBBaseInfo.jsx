/**
 * This is a custom Front Matter Component that takes the front matter and renders the api data
 */
import React from "react";
import useFrontMatter from "./useFrontMatter";

const CBBaseInfo = () => {
  const frontMatter = useFrontMatter();
  return (
    <div>
      {Object.entries(frontMatter).map(([key, value]) => {
        if (key === "cbbaseinfo") {
          console.log(`Key: ${key}, Value: ${value}`);

          return <div className="description" key={key}>Description: {value.description}</div>;
        }

        return null;
      })}
    </div>
  );
};

export default CBBaseInfo;
