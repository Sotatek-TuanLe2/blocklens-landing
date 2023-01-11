import { ReactElement } from 'react';
import Layout from 'components/Layout';
import styles from 'styles/PricingPage.module.scss';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import AppAccordion from 'components/AppAccordion';
import {
  BLOCKLENS_LOGIN_URL,
  PRICING_NETWORKS,
  PRICING_PACKAGES,
  PRICING_PLANS,
} from 'utils/constant';
import Link from 'next/link';
import { NextSeoProps, ProductJsonLd } from 'next-seo';
import { productJsonLd, seoConfigs } from 'next-seo.config';

const Pricing = () => {
  const _renderPrice = () => (
    <>
      <h1
        className={`${styles['introduction__main-text']} ${styles['price-text']}`}
      >
        Industry-leading <span>plans</span>, built for everyone
      </h1>
      <div className={styles['list-package']}>
        {PRICING_PACKAGES.map((item, index) => {
          return (
            <div className={styles['package']} key={`${index} package`}>
              {item.BADGE ? (
                <div className={styles['badge-package']}>{item.BADGE}</div>
              ) : (
                ''
              )}
              <div className={styles['name-package']}>{item.NAME}</div>
              <div className={styles['price-package-wrap']}>
                {item.PRICE !== '0' && (
                  <div className={styles['currency-package']}>$</div>
                )}
                <div className={styles['price-package']}>
                  {item.PRICE === '0' ? 'Free' : item.PRICE}
                </div>
                {item.PRICE !== '0' ? (
                  <div className={styles['time-package']}>/mo</div>
                ) : (
                  ''
                )}
              </div>
              {item.SERVICE.map((content, index) => {
                return (
                  <div
                    className={styles['service-package']}
                    key={`${index} service`}
                  >
                    <div className={'icon-tone'}></div>{' '}
                    <div className={styles['service-content']}>{content}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );

  const _renderBanner = () => (
    <>
      <h1
        className={`${styles['introduction__main-text']} ${styles['price-text']}`}
      >
        Support the best <span>networks</span>
      </h1>
      <div className={styles['network-support']}>
        <img src="/images/network-circle.png" alt="network circle" />
      </div>
    </>
  );

  const _renderPlanItem = () => (
    <>
      {PRICING_PLANS.map((plan, index) => {
        return (
          <AccordionItem
            key={`${index} plan mobile`}
            className={styles['content-plan-wrap']}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={700}
                      fontSize="18px"
                    >
                      {plan.name}
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={0}>
                  <div className={styles['content-plan-item']}>
                    <div className="icon-tone"></div>
                    <span>{plan.mainTestNet}</span>
                  </div>
                  <div className={styles['content-plan-item']}>
                    <div className="icon-tone"></div>
                    <span>{plan.archiveDate}</span>
                  </div>
                  <div className={styles['content-plan-item']}>
                    <div className="icon-tone"></div>
                    <span>{plan.activeApps}</span>
                  </div>
                  <div className={styles['content-plan-item']}>
                    <div className="icon-tone"></div>
                    <span>{plan.messagesCount}</span>
                  </div>
                  <div className={styles['active-plan-btn']}>
                    <div>
                      <Link href={BLOCKLENS_LOGIN_URL} target={'_blank'}>
                        Get Started
                      </Link>
                    </div>
                    <div className="icon-vector-right"></div>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        );
      })}
    </>
  );

  const _renderPricePlan = (value: string) => {
    if (value === 'true') {
      return <div className="icon-tone"></div>;
    } else return <div>{value}</div>;
  };

  const _renderPlanComparisonMobile = () => {
    return (
      <div className={styles['mobile-ui']}>
        <AppAccordion
          content={_renderPlanItem}
          className={'list-plan-mobile'}
        />
      </div>
    );
  };

  const _renderPlanConparisonDesktop = () => {
    return (
      <div className={`${styles['plan-table']} ${styles['desktop-ui']}`}>
        <div className={styles['plan-row']}>
          <div className={styles['name-plan-cell']}></div>
          <div
            className={`${styles['free-plan-cell']} ${styles['title-plan']}`}
          >
            STARTER
          </div>
          <div
            className={`${styles['starter-plan-cell']} ${styles['title-plan']}`}
          >
            BASIC
          </div>
          <div
            className={`${styles['growth-plan-cell']} ${styles['title-plan']}`}
          >
            GROWTH
          </div>
          <div className={`${styles['pro-plan-cell']} ${styles['title-plan']}`}>
            PROFESSIONAL
          </div>
        </div>
        {PRICING_NETWORKS.map((plan, index) => {
          return (
            <div className={styles['plan-row']} key={`${index} plan`}>
              <div className={styles['name-plan-cell']}>{plan.name}</div>
              <div className={styles['free-plan-cell']}>
                {_renderPricePlan(plan.free)}
              </div>
              <div className={styles['starter-plan-cell']}>
                {_renderPricePlan(plan.starter)}
              </div>
              <div className={styles['growth-plan-cell']}>
                {_renderPricePlan(plan.growth)}
              </div>
              <div className={styles['pro-plan-cell']}>
                {_renderPricePlan(plan.professional)}
              </div>
            </div>
          );
        })}
        <div className={styles['plan-row']}>
          <div className={styles['name-plan-cell']}></div>
          <div
            className={`${styles['free-plan-cell']} ${styles['active-plan']}`}
          >
            <div>
              <Link href={BLOCKLENS_LOGIN_URL} target={'_blank'}>
                Get Started
              </Link>
            </div>
            <div className="icon-vector-right"></div>
          </div>
          <div
            className={`${styles['starter-plan-cell']} ${styles['active-plan']}`}
          >
            <div>
              <Link href={BLOCKLENS_LOGIN_URL} target={'_blank'}>
                Get Started
              </Link>
            </div>{' '}
            <div className="icon-vector-right"></div>
          </div>
          <div
            className={`${styles['growth-plan-cell']} ${styles['active-plan']}`}
          >
            <div>
              <Link href={BLOCKLENS_LOGIN_URL} target={'_blank'}>
                Get Started
              </Link>
            </div>

            <div className="icon-vector-right"></div>
          </div>
          <div
            className={`${styles['pro-plan-cell']} ${styles['active-plan']}`}
          >
            <div>
              <Link href={BLOCKLENS_LOGIN_URL} target={'_blank'}>
                Get Started
              </Link>
            </div>
            <div className="icon-vector-right"></div>
          </div>
        </div>
      </div>
    );
  };

  const _renderPlan = () => (
    <>
      <h1
        className={`${styles['introduction__main-text']} ${styles['price-text']}`}
      >
        <span>Plan</span> comparison
      </h1>
      {_renderPlanComparisonMobile()}
      {_renderPlanConparisonDesktop()}
    </>
  );

  const _renderCTA = () => (
    <>
      <h1
        className={`${styles['introduction__main-text']} ${styles['price-text']}`}
      >
        Want to learn more? <span>Contact us</span>
      </h1>
      <div className={styles['button-network-wrap']}>
        <div className={styles['button-network']}>
          <div className={'icon-telegram'}></div>
          <div>Telegram</div>
        </div>
      </div>
    </>
  );

  return (
    <div className={styles['main-landing']}>
      <div className={styles['introduction']}>
        {_renderPrice()}
        {_renderBanner()}
        {_renderPlan()}
        {_renderCTA()}
      </div>
    </div>
  );
};

export default Pricing;

Pricing.getLayout = function getLayout(page: ReactElement) {
  const seoProps: NextSeoProps = {
    title: `${seoConfigs.title} - Pricing`,
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
