import type { AppProps } from 'next/app';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { wrapper } from '../store';
import { GlobalStyles } from '../design-system/globalStyle';
import '../design-system/index.css';
import { useSystemDesign } from '../design-system/useSystemDesign';

type AppContentProps = Pick<AppProps, 'Component' | 'pageProps'>;

const AppContent: FC<AppContentProps> = ({ Component, pageProps }) => {
  const { theme } = useTypedSelector((state) => state.ui);
  const { darkTheme, lightTheme } = useSystemDesign();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <AppContent Component={Component} pageProps={props.pageProps} />
    </Provider>
  );
};

export default App;
