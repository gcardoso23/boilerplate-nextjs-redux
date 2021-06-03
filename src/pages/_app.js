import Head from 'next/head';
import { wrapper } from 'store/store';

import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={ theme }>
        <Head>
          <title>Boilerplate</title>
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <meta name="description" content="A simple project starter with Nextjs" />
        </Head>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App);
