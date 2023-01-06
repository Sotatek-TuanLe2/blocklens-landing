import { ReactElement } from 'react';
import Layout from 'components/Layout';
import styles from 'styles/LandingPage.module.scss';

const Home = () => {
  return <div className={styles['landingpage']}>Home</div>;
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};
