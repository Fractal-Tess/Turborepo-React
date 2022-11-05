import { PropsWithChildren } from 'react';
import type { Theme } from '$types';

import ThemeProvider from '$provider/ThemeProivder';

import Footer from '$layout/Footer';
import Header from '$layout/Header';

type Props = {
  cookieTheme: Theme | null;
} & PropsWithChildren;

export default function BaseLayout({ cookieTheme, children: page }: Props) {
  return (
    <ThemeProvider cookieTheme={cookieTheme}>
      <div className="bg-gradient-to-t from-base-300 to-base-100 min-h-screen flex flex-col">
        <Header />
        {page}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
