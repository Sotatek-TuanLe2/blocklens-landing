import React from 'react';
import Image from 'next/image';
import { NextPageWithLayout } from './_app.page';
import Layout from 'components/Layout';
import { NextSeoProps } from 'next-seo';
import { seoConfigs } from 'next-seo.config';
import styles from 'styles/404.module.scss';
import { notFoundImg } from 'public/images';

const PageNotFound: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Image src={notFoundImg} className={styles.image} alt="404 not found" />
      <h1 className={styles.text}>Page not found</h1>
    </div>
  );
};

PageNotFound.getLayout = function getLayout(page) {
  const seoProps: NextSeoProps = {
    title: `${seoConfigs.title} - Page Not Found`,
  };
  return <Layout {...seoProps}>{page}</Layout>;
};

export default PageNotFound;
