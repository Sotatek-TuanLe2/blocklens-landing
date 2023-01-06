import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Footer from './Footer';
import Header from './Header';
import { defaultSEO } from 'next-seo.config';

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

  return (
    <div className={`page-container ${className}`}>
      <NextSeo {...SEO} />
      <Header isFixedHeader={isFixedHeader} />
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
