import { ThemeProvider } from '../context/ThemeContext';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    min-height: 100vh;
    padding: 0 !important;
    margin: 0 !important;
    overflow-x: hidden;
  }
  
  * {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.5s ease;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}