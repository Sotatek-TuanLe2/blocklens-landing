import { ReactElement } from 'react';
import Layout from 'components/Layout';
import styles from 'styles/LandingPage.module.scss';
import { isMobile } from 'react-device-detect';
import Link from 'next/link';
import MainImageLanding from 'components/MainImageLanding';
import { BLOCKSNIPER_LOGIN_URL, BLOCKSNIPER_SINGUP_URL } from 'utils/constant';
import { ProductJsonLd } from 'next-seo';
import { productJsonLd } from 'next-seo.config';

const categories = [
  {
    name: 'Push notifications',
    description:
      'Notify users of critical events at every step of their journey. Increase user engagement and retention by 100%.',
    image: 'push-notifications.png',
  },
  {
    name: 'Advanced events',
    description:
      'Not just address and NFT, Block Sniper allows developers to upload their smart contract ABI and specify which one to listen to.',
    image: 'advanced-events.png',
  },
  {
    name: 'Simple integration',
    description:
      'Create a new web hook with 1 click and start getting on-chain updates instantly.',
    image: 'simple-integration.png',
  },
];

const useCases = [
  {
    name: '1. Address transactions',
    description:
      'Notify whenever there is a new transaction occurs on your address. Track your wallet balance, no more waiting for every new block.',
    image: 'use-case-1.png',
  },
  {
    name: '2. Smart contract transactions',
    description:
      'Get to know when a swap, an in-game action, purchases, and other smart-contract transactions were made instantly. Upload your smart contract ABI and specify which method to receive webhook when being called.',
    image: 'use-case-2.png',
  },
  {
    name: '3. NFT activities',
    description:
      'Notify your users when their NFT is minted, transferred to another users. Congrats your users once their in-game NFT is sold, their items is available for sale and much more.',
    image: 'use-case-3.png',
  },
  {
    name: '4. Failed transactions',
    description:
      'Getting alerts when there is a failed transaction in your smart contract to notify users, aware of hacking attempts. No more refreshing web pages to check for failed transactions.',
    image: 'use-case-4.png',
  },
];

const feedbacks = [
  {
    name: 'Leo',
    title: 'CEO Fizen',
    description:
      'Block Sniper saved us 2 months of development with its no-code platform. On-chain synchronization is a must for web3 application and develop it by ourself is extremely time consuming.',
  },
  {
    name: 'Thi Truong',
    title: 'Founder gamefi.org',
    description:
      'Thanks to Block Sniper, we’ve cut our spend for infrastructure. Maintaining a blockchain node or hosting blockchain crawler servers is costly nowaday.',
  },
  {
    name: 'Louis',
    title: 'Founder Crypto Hawk',
    description:
      'Building dApp has never been easier with Block Sniper. It supports everything we need to make our platform aware of on-chain events and keep our users engaged with the application.',
  },
];

const Home = () => {
  return (
    <div className={styles['landingpage']}>
      <div className={styles['main-landing']}>
        <div className={styles['introduction']}>
          <div className={styles['introduction__sub-text']}>
            Notifications for Web3.0 Developers
          </div>
          <h1 className={styles['introduction__main-text']}>
            Listen to <span>on-chain</span> activities
          </h1>
          <div className={styles['introduction__description']}>
            Block Sniper pushes on-chain events to your back-end web hooks.
            Reliable, configurable, real-time. Get started for free now!
          </div>

          <div className={styles['introduction__btn']}>
            <Link href={BLOCKSNIPER_LOGIN_URL} target="_blank">
              <button className={styles['btn-primary']}>Get Started</button>
            </Link>
          </div>

          <div className={styles['image-main']}>
            <MainImageLanding />
          </div>

          <div className={styles['categories']}>
            {categories.map((item, index) => {
              return (
                <div key={index}>
                  <div className={styles['category']}>
                    <div>
                      <div className={styles['category__name']}>
                        {item.name}
                      </div>
                      <div className={styles['category__description']}>
                        {item.description}
                      </div>
                    </div>
                    <img
                      src={`/images/${item.image}`}
                      alt={`category-${index}`}
                    />
                  </div>
                  <div className={styles['divider']}></div>
                </div>
              );
            })}
          </div>

          <div className={styles['use-cases']}>
            <h1 className={styles['use-cases__title']}>
              Use <span>cases</span>
            </h1>
            <div>
              {useCases.map((item, index: number) => {
                return (
                  <div key={index} className={styles['use-case-wrap']}>
                    <div
                      className={`${styles['use-case']} ${styles['reverse']}`}
                    >
                      <div className={styles['use-case__content']}>
                        <div className={styles['use-case__name']}>
                          {item.name}
                        </div>
                        <div className={styles['use-case__description']}>
                          {item.description}
                        </div>
                      </div>
                      <img
                        src={`/images/${item.image}`}
                        alt={`use-case-${index}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles['chart']}>
            <div className={styles['chart__description']}>
              <span>Blockchain made simple.</span> Remove the hassle of syncing
              and maintaining data/transactions between on-chain and off-chain.
              No fullnode setup, No code, Multichain.
            </div>

            <img src="/images/chart.png" alt="chart" />
          </div>

          <div className={styles['feedback']}>
            <h1 className={styles['feedback__heading']}>
              What other <br />
              <span>developers</span> say
            </h1>

            <div className={styles['feedback__content']}>
              <div className={styles['feedback__list']}>
                {feedbacks.map((item, index) => {
                  return (
                    <div className={styles['feedback__item']} key={index}>
                      <div className={styles['feedback__description']}>
                        {item.description}
                      </div>
                      <div>
                        <div className={styles['feedback__name']}>
                          {item.name}
                        </div>
                        <div className={styles['feedback__title']}>
                          {item.title}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles['get-start']}>
            <h1 className={styles['get-start__heading']}>
              Get <span> started </span> now
            </h1>
            <div className={styles['get-start__description']}>
              Block Sniper gives you, the developers, the UX you demand and
              deserve, with no custom code.
            </div>

            <div className={styles['get-start__btn']}>
              <Link href={BLOCKSNIPER_SINGUP_URL} target="_blank">
                <button className={styles['btn-primary']}>Sign Up</button>
              </Link>
            </div>
          </div>
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
