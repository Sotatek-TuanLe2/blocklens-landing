import { ReactElement } from 'react';
import Layout from 'components/Layout';
import styles from 'styles/LandingPage.module.scss';
import Link from 'next/link';
import MainImageLanding from 'components/MainImageLanding';
import {
  BLOCKLENS_LOGIN_URL,
  BLOCKLENS_SINGUP_URL,
  LANDING_FEATURES,
  LANDING_FEEDBACKS,
  LANDING_USE_CASES,
} from 'utils/constant';
import { ProductJsonLd } from 'next-seo';
import { productJsonLd } from 'next-seo.config';

const Home = () => {
  const _renderGetStarted = () => (
    <>
      <div className={styles['introduction__sub-text']}>
        Notifications for Web3.0 Developers
      </div>
      <h1 className={styles['introduction__main-text']}>
        Listen to <span>on-chain</span> activities
      </h1>
      <div className={styles['introduction__description']}>
        Block Lens pushes on-chain events to your back-end web hooks. Reliable,
        configurable, real-time. Get started for free now!
      </div>
      <div className={styles['introduction__btn']}>
        <Link href={BLOCKLENS_LOGIN_URL} target="_blank">
          <button className={styles['btn-primary']}>Get Started</button>
        </Link>
      </div>
      <div className={styles['image-main']}>
        <MainImageLanding />
      </div>
    </>
  );

  const _renderFeatures = () => (
    <div className={styles['categories']}>
      {LANDING_FEATURES.map((item, index) => {
        return (
          <div key={index}>
            <div className={styles['category']}>
              <div>
                <div className={styles['category__name']}>{item.name}</div>
                <div className={styles['category__description']}>
                  {item.description}
                </div>
              </div>
              <img src={`/images/${item.image}`} alt={`category-${index}`} />
            </div>
            <div className={styles['divider']}></div>
          </div>
        );
      })}
    </div>
  );

  const _renderUseCases = () => (
    <div className={styles['use-cases']}>
      <h1 className={styles['use-cases__title']}>
        Use <span>cases</span>
      </h1>
      <div>
        {LANDING_USE_CASES.map((item, index: number) => {
          return (
            <div key={index} className={styles['use-case-wrap']}>
              <div className={`${styles['use-case']} ${styles['reverse']}`}>
                <div className={styles['use-case__content']}>
                  <div className={styles['use-case__name']}>{item.name}</div>
                  <div className={styles['use-case__description']}>
                    {item.description}
                  </div>
                </div>
                <img
                  src={`/images/${item.image}`}
                  alt={`use-case-${index}`}
                  className={styles['use-case-img']}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const _renderChart = () => (
    <div className={styles['chart']}>
      <div className={styles['chart__description']}>
        <span>Blockchain made simple.</span> Remove the hassle of syncing and
        maintaining data/transactions between on-chain and off-chain. No
        fullnode setup, No code, Multichain.
      </div>
      <img src="/images/chart.png" alt="chart" />
    </div>
  );

  const _renderFeedback = () => (
    <div className={styles['feedback']}>
      <h1 className={styles['feedback__heading']}>
        What other <br />
        <span>developers</span> say
      </h1>

      <div className={styles['feedback__content']}>
        <div className={styles['feedback__list']}>
          {LANDING_FEEDBACKS.map((item, index) => {
            return (
              <div className={styles['feedback__item']} key={index}>
                <div className={styles['feedback__description']}>
                  {item.description}
                </div>
                <div>
                  <div className={styles['feedback__name']}>{item.name}</div>
                  <div className={styles['feedback__title']}>{item.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const _renderCTA = () => (
    <div className={styles['get-start']}>
      <h1 className={styles['get-start__heading']}>
        Get <span> started </span> now
      </h1>
      <div className={styles['get-start__description']}>
        Block Lens gives you, the developers, the UX you demand and deserve,
        with no custom code.
      </div>

      <div className={styles['get-start__btn']}>
        <Link href={BLOCKLENS_SINGUP_URL} target="_blank">
          <button className={styles['btn-primary']}>Sign Up</button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className={styles['landingpage']}>
      <div className={styles['main-landing']}>
        <div className={styles['introduction']}>
          {_renderGetStarted()}
          {_renderFeatures()}
          {_renderUseCases()}
          {_renderChart()}
          {_renderFeedback()}
          {_renderCTA()}
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>
        <ProductJsonLd {...productJsonLd} />
        {page}
      </Layout>
    </>
  );
};
