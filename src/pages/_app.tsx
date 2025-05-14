// pages/_app.tsx
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globalStyles';
import Navbar from '@/components/navbar/navbar';
import { ThemeProvider as CustomThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { ThemeProvider } from 'styled-components';
import { nunitoSans } from '@/styles/fonts/fonts';

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
    <div className={nunitoSans.className}>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
    </div>
  )
}