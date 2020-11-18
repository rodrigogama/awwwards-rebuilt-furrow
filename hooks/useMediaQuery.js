import React from 'react';
import { ThemeContext } from 'styled-components';

const useMediaQuery = queryInput => {
  const theme = React.useContext(ThemeContext);
  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, '');

  const isClientSide = typeof window !== 'undefined';
  const defaultMatches = false;
  const matchMedia = isClientSide ? window.matchMedia : null;

  const [match, setMatch] = React.useState(() => {
    if (isClientSide) {
      return matchMedia(query).matches;
    }

    // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.
    return defaultMatches;
  });

  React.useEffect(() => {
    if (!isClientSide) {
      return undefined;
    }

    const queryList = matchMedia(query);
    const updateMatch = () => {
      setMatch(queryList.matches);
    };

    updateMatch();
    queryList.addEventListener('change', updateMatch);

    return () => {
      queryList.removeEventListener('change', updateMatch);
    };
  }, [query, matchMedia, isClientSide]);

  return match;
};

export default useMediaQuery;
