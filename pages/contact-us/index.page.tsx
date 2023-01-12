import AppField from 'components/AppField';
import Layout from 'components/Layout';
import { NextSeoProps, ProductJsonLd } from 'next-seo';
import { productJsonLd, seoConfigs } from 'next-seo.config';
import React, { ReactElement } from 'react';
import styles from 'styles/ContactUs.module.scss';

const ContactUs = () => {
  return (
    <div className={styles['contact-us']}>
      <h1 className={styles['title-contact-us']}>
        <span>Sota Labs</span> <br /> <span>by filling the form</span>
      </h1>
      <p className={styles['desc-about-us']}>
        {`Simply fill in this form and we'll get in touch with you to discuss in further details.`}
        <br />
        {`All information will be kept confidential.`}
      </p>
      <div className={styles['form-contact-us']}>
        <AppField label="Email" isRequired>
          <input />
        </AppField>
      </div>
    </div>
  );
};

export default ContactUs;

ContactUs.getLayout = function (page: ReactElement) {
  const seoProps: NextSeoProps = {
    title: `${seoConfigs.title} - Contact Us`,
  };
  return (
    <>
      <Layout {...seoProps} className="pricing-container">
        <ProductJsonLd {...productJsonLd} />
        {page}
      </Layout>
    </>
  );
};
