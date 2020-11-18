/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export const INITIAL_STATE = {
  isMenuOpen: false,
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU': {
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    }
    default: {
      return state;
    }
  }
};

export const MenuContext = React.createContext();

export const MenuContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, INITIAL_STATE);
  const store = React.useMemo(() => ({ state, dispatch }), [state]);
  return <MenuContext.Provider value={store}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => {
  const { state, dispatch } = React.useContext(MenuContext);
  return [state, dispatch];
};
