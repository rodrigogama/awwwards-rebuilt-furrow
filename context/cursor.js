/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import colors from '../styles/colors';

const INITIAL_STATE = {
  cursorStyle: {
    bordered: false,
    color: colors.red,
  },
  position: null,
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CURSOR_STYLE': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          ...action.payload,
        },
      };
    }
    case 'ADD_CURSOR_BORDER': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          bordered: true,
        },
      };
    }
    case 'REMOVE_CURSOR_BORDER': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          bordered: false,
        },
      };
    }
    case 'ADD_CURSOR_COLOR': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          color: action.payload,
        },
      };
    }
    case 'RESET_CURSOR_COLOR': {
      return {
        ...state,
        cursorStyle: {
          ...state.cursorStyle,
          color: INITIAL_STATE.cursorStyle.color,
        },
      };
    }
    case 'LOCK_CURSOR_POSITION': {
      return {
        ...state,
        position: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const CursorContext = React.createContext();

export const CursorContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, INITIAL_STATE);
  const store = React.useMemo(() => ({ state, dispatch }), [state]);
  return (
    <CursorContext.Provider value={store}>{children}</CursorContext.Provider>
  );
};

export const useCursorContext = () => {
  const { state, dispatch } = React.useContext(CursorContext);
  return [state, dispatch];
};
