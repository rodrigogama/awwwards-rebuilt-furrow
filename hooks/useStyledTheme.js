import React from 'react';
import { ThemeContext } from 'styled-components';

const useStyledTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme || {};
};

export default useStyledTheme;
