import { ReactElement } from 'react';
import Image from 'next/image';
import Layout from 'components/Layout';
import styles from 'styles/LandingPage.module.scss';
import 'swiper/swiper.min.css';

import MainImageLanding from 'components/MainImageLanding';
import Link from 'next/link';
import {
  BLOCKLENS_LOGIN_URL,
  BLOCKLENS_SINGUP_URL,
  LANDING_FEATURES,
  LANDING_FEEDBACKS,
  LANDING_USE_CASES,
} from 'utils/constant';
import { NextSeoProps, ProductJsonLd } from 'next-seo';
import { productJsonLd, seoConfigs } from 'next-seo.config';
import {
  advancedEventImg,
  multichainImg,
  pushNotificationImg,
  simpleIntegrationImg,
  addressTransactionImg,
  SCTransactionImg,
  NFTActivitiesImg,
  FailedTransactionImg,
} from 'public/images';

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
        <Link href={BLOCKLENS_LOGIN_URL} target="_blank" rel="noreferrer">
          <button className={styles['btn-primary']}>Get Started</button>
        </Link>
      </div>
      <div className={styles['image-main']}>
        <MainImageLanding />
      </div>
    </>
  );

  const getFeatureImageSrc = (image: string) => {
    switch (image) {
      case 'push-notifications':
        return pushNotificationImg;
      case 'advanced-events':
        return advancedEventImg;
      case 'simple-integration':
        return simpleIntegrationImg;
      default:
        return '';
    }
  };

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
              <Image src={getFeatureImageSrc(item.image)} alt={item.image} />
            </div>
            <div className={styles['divider']}></div>
          </div>
        );
      })}
    </div>
  );

  const getUsecaseImageSrc = (image: string) => {
    switch (image) {
      case 'address-transaction':
        return addressTransactionImg;
      case 'smart-contract-transaction':
        return SCTransactionImg;
      case 'nft-activity':
        return NFTActivitiesImg;
      case 'failed-transaction':
        return FailedTransactionImg;
      default:
        return '';
    }
  };

  const _renderUseCases = () => (
    <div className={styles['use-cases']}>
      <div className={styles['use-cases__title']}>
        Use <span>cases</span>
      </div>
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
                <Image
                  src={getUsecaseImageSrc(item.image)}
                  alt={`Use Case ${item.image}`}
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
      <Image src={multichainImg} alt="Blocklens multichain" />
    </div>
  );

  const _renderFeedback = () => (
    <div className={styles['feedback']}>
      <div className={styles['feedback__heading']}>
        What other <br />
        <span>developers</span> say
      </div>

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
      <div className={styles['get-start__heading']}>
        Get <span> started </span> now
      </div>
      <div className={styles['get-start__description']}>
        Block Lens gives you, the developers, the UX you demand and deserve,
        with no custom code.
      </div>

      <div className={styles['get-start__btn']}>
        <Link href={BLOCKLENS_SINGUP_URL} target="_blank" rel="noreferrer">
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
  const seoProps: NextSeoProps = {
    title: `${seoConfigs.title} - Notifications for Web3.0 Developers`,
  };
  return (
    <>
      <Layout {...seoProps}>
        <ProductJsonLd {...productJsonLd} />
        {page}
      </Layout>
    </>
  );
};
