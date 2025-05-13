// pages/_app.tsx
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globalStyles';
import Navbar from '@/components/navbar/navbar';
import { ThemeProvider as CustomThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { ThemeProvider } from 'styled-components';

export default function App(props: AppProps) {

  return (
    <CustomThemeProvider>
      <WithTheme {...props} />
    </CustomThemeProvider>
  );
}


function WithTheme({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}