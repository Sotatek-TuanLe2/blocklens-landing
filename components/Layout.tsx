import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}
const Layout = (props: LayoutProps) => {
  const { children, className = '', ...seoProps } = props;
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
      <Header isFixedHeader={isFixedHeader} />
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
