import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: sans-serif;
    font-family: calibre, sans-serif;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
    font-size: 18px;
    font-size: 1.125rem;
    font-weight: 400;
    overscroll-behavior: none;
    height: auto;
    overflow-y: visible;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* http://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28)*/
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    cursor: none;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  address {
    font-style: normal;
  }

  h1 {
    margin: 0;
    font-size: 120px;
    font-size: 7.5rem;
    line-height: .7166666667;
    font-weight: 900;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    cursor: none;
  }

  button {
    appearance: none;
    padding: 0;
    background: 0 0;
    border: none;
    color: inherit;
    outline: 0;
    cursor: none;
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.small`
    a {
      cursor:pointer;
    }

    button {
      cursor:pointer;
    }
  `};
`;
