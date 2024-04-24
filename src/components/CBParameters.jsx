/**
 * This is a custom Front Matter Component that takes the front matter and renders the api data
 */
import React from 'react';
import useFrontMatter from './useFrontMatter';

const CBParameters = () => {
  const frontMatter = useFrontMatter();
  console.log(frontMatter)
  return (
  <div>
    {Object.entries(frontMatter).map(([key, value]) => {
      if (key === 'cblibrary') {
        console.log(`Key: ${key}, Value: ${value}`);
        
        if (value.parameters) {
          return value.parameters.map((param, index) => {
            console.log(param.name);
            return (
              <p key={index}>
                <strong>{param.name}</strong>
                <br/>
              </p>
            );
          });
        }
      }
      
      return null;
    })}
  </div>
);
  };

export default CBParameters;