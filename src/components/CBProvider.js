/**
 * This is a custom Provider for Codebolt so that we can take the Front Matter on top of Docs and render it properly.
 */

import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import CBBaseInfo from './CBBaseInfo';
import CBParameters from './CBParameters';
import CBAPICategory from './CBAPICategory';
import FrontMatterContext from './FrontMatterContext';


const components = {
  CBBaseInfo: props => <CBBaseInfo {...props} />,
  CBParameters: props => <CBParameters {...props} />,
  CBAPICategory: props => <CBAPICategory {...props} />
};

const CBProvider = ({children, frontMatter}) => (
  <FrontMatterContext.Provider value={frontMatter}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </FrontMatterContext.Provider>

);

export default CBProvider;