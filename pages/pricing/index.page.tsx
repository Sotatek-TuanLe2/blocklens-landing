import { ReactElement } from 'react';
import Layout from 'components/Layout';
import styles from 'styles/LandingPage.module.scss';

const Pricing = () => {
  return <div className={styles['landingpage']}>Pricing</div>;
};

export default Pricing;

Pricing.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};
