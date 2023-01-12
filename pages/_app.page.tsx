import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import 'styles/globals.scss';
import extendTheme from 'themes';
import 'swiper/scss';
import 'swiper/scss/navigation';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ChakraProvider resetCSS theme={extendTheme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
