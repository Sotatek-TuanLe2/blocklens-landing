import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Footer from './Footer';
import Header from './Header';
import { defaultSEO } from 'next-seo.config';
import { BLOCKSNIPER_LIVECHAT_SCRIPT } from 'utils/constant';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}
const Layout = (props: LayoutProps) => {
  const { children, className = '', ...seoProps } = props;
  const SEO = { ...defaultSEO, ...seoProps };

  const [isFixedHeader, setIsFixedHeader] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixedHeader(window.scrollY > 96);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const _renderLiveChatButton = () => (
    <Script src={BLOCKSNIPER_LIVECHAT_SCRIPT} strategy="lazyOnload" />
  );

  return (
    <div className={`page-container ${className}`}>
      <NextSeo {...SEO} />
      <Header isFixedHeader={isFixedHeader} />
      <div className="content-container">{children}</div>
      {_renderLiveChatButton()}
      <Footer />
    </div>
  );
};

export default Layout;
