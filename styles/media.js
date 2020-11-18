import { css } from 'styled-components';

export const breakpoints = {
  mobile: 360,
  tablet: 767,
  small: 1023,
  medium: 1200,
};

export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
