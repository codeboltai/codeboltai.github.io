/**
 * This is a custom Front Matter Component that takes the front matter and renders the api data
 */
import React from "react";
import useFrontMatter from "./useFrontMatter";

const CBBaseInfo = () => {
  const frontMatter = useFrontMatter();
  console.log(frontMatter);
  return (
    <div>
      {Object.entries(frontMatter).map(([key, value]) => {
        if (key === "cbbaseinfo") {
          console.log(`Key: ${key}, Value: ${value}`);

          return <div className="description" key={key}>Description: {value.description}</div>;
          // return Object.entries(value).map(([cbkey, cbvalue]) => {
          //   console.log(cbkey);
          //   return (
          //     <p key={cbkey}>
          //       <strong>{cbkey}</strong>
          //       <br/>
          //     </p>
          //   );
          // });
        }

        return null;
      })}
    </div>
  );
};

export default CBBaseInfo;
