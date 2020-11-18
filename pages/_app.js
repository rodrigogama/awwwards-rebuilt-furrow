import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider, useThemeContext } from '../context/theme';
import { CursorContextProvider } from '../context/cursor';
import { MenuContextProvider } from '../context/menu';
import GlobalStyles from '../styles/global';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';
import AppBar from '../components/AppBar';
import Cursor from '../components/Cursor';
import Menu from '../components/Menu';
import SiteOfTheDay from '../components/SiteOfTheDay';

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

const ThemedApp = ({ children }) => {
  const [state] = useThemeContext();
  const currentTheme = themes[state.theme];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const Header = () => <AppBar direction="down" renderAs="header" />;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Awwwards Rebuilt - Furrow Studio</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/yzi3byl.css" />
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: calibre;
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          src: url('/fonts/CalibreTest-Regular.otf') format('opentype'),
            url('/fonts/calibre-test-regular.woff') format('woff');
        }

        @font-face {
          font-family: calibre;
          font-weight: 900;
          font-style: normal;
          font-display: swap;
          src: url('/fonts/CalibreTest-Black.otf') format('opentype'),
            url('/fonts/calibre-test-black.woff') format('woff');
        }
      `}</style>
      <ThemeContextProvider>
        <MenuContextProvider>
          <CursorContextProvider>
            <ThemedApp>
              <Header />
              <Menu />
              <Component {...pageProps} />
              <Cursor />
              <SiteOfTheDay />
            </ThemedApp>
          </CursorContextProvider>
        </MenuContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
