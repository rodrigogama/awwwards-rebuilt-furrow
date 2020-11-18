/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const storageKey = '@AwwwardsRebuilt:Theme';

const INITIAL_STATE = {
  theme: 'dark',
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem(storageKey, newTheme);
      return {
        ...state,
        theme: newTheme,
      };
    }
    case 'SET_THEME': {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, INITIAL_STATE);
  const store = React.useMemo(() => ({ state, dispatch }), [state]);

  React.useEffect(() => {
    dispatch({
      type: 'SET_THEME',
      payload: window.localStorage.getItem(storageKey) || 'dark',
    });
  }, []);

  return (
    <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const { state, dispatch } = React.useContext(ThemeContext);
  return [state, dispatch];
};
