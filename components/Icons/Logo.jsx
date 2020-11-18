import React from 'react';
import { useThemeContext } from '../../context/theme';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';

const Logo = props => {
  const { buttonProps = {}, ...rootProps } = props;

  const theme = useStyledTheme();
  const [, dispatch] = useThemeContext();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor,
  } = useCursorStyle();

  const handleToggleTheme = React.useCallback(
    event => {
      event.preventDefault();
      dispatch({ type: 'TOGGLE_THEME' });

      // reset the cursor color so that it uses the theme text color as default
      addCursorColor(null);
    },
    [dispatch, addCursorColor],
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 131 23"
      fill={theme.text}
      onMouseEnter={addCursorBorder}
      onMouseLeave={removeCursorBorder}
      {...rootProps}
    >
      <path d="M0 .158v22.399h5.695V14.64h8.992V9.68H5.695V5.23h9.78V.158z" />
      <path d="M18.117 13.4V.159h5.732V12.89c0 3.173 1.47 4.815 3.869 4.815 2.365 0 3.833-1.642 3.833-4.815V.158h5.732v13.279c0 6.128-3.761 9.484-9.565 9.484-5.803 0-9.6-3.356-9.6-9.52" />
      <path d="M45.858 10.482h3.582c2.042 0 2.973-1.058 2.973-2.7 0-1.641-.931-2.699-2.973-2.699h-3.582v5.4zm0 4.67v7.405h-5.696V.158h9.887c4.729 0 7.989 2.737 7.989 7.625 0 3.392-1.684 5.727-4.371 6.748l5.158 8.026h-6.376l-4.585-7.405h-2.006z" />
      <path d="M66.366 10.482h3.582c2.042 0 2.973-1.058 2.973-2.7 0-1.641-.931-2.699-2.973-2.699h-3.582v5.4zm0 4.67v7.405H60.67V.158h9.887c4.729 0 7.989 2.737 7.989 7.625 0 3.392-1.684 5.727-4.371 6.748l5.158 8.026h-6.376l-4.584-7.405h-2.007z" />
      <path d="M118.682.158l3.366 13.17 3.046-13.17h5.802l-5.802 22.399h-5.267l-3.403-13.133-3.439 13.133h-5.266L101.952.158h5.875l3.082 13.17 3.402-13.17z" />
      <path
        role="button"
        d="M98.045 11.358c0 4.162-3.313 7.536-7.4 7.536-4.088 0-7.4-3.374-7.4-7.536 0-4.162 3.312-7.536 7.4-7.536 4.087 0 7.4 3.374 7.4 7.536"
        fill={theme.colors.red}
        onMouseEnter={() => addCursorColor(theme.text)}
        onMouseLeave={resetCursorColor}
        onClick={handleToggleTheme}
        {...buttonProps}
      />
    </svg>
  );
};

export default Logo;
