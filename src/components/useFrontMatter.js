import { useContext } from 'react';
import FrontMatterContext from './FrontMatterContext';

const useFrontMatter = () => {
  const context = useContext(FrontMatterContext);
  if (!context) {
    throw new Error('useFrontMatter must be used within a FrontMatterProvider');
  }
  return context;
};

export default useFrontMatter;