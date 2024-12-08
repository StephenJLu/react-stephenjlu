import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Text from './Text';

const components = {
  p: (props) => <Text {...props} />,
  h1: (props) => <Text className="h1" {...props} />,
  h2: (props) => <Text className="h2" {...props} />,
  h3: (props) => <Text className="h3" {...props} />,
  subtitle: (props) => <Text className="subtitle" {...props} />,
  // Add more elements as needed
};

const CustomMDXProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXProvider;