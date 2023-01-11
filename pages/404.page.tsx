import React from 'react';
import { NextPageWithLayout } from './_app.page';
import Layout from 'components/Layout';
import { NextSeoProps } from 'next-seo';
import { seoConfigs } from 'next-seo.config';
import styles from 'styles/404.module.scss';

const PageNotFound: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <img
        alt="not-found"
        src="/images/img-not-found.png"
        className={styles.image}
      />
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
