import { useDisclosure } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { BlocklensIcon, PlayVideoIcon, TimelineIcon } from 'components/Icons';
import Layout from 'components/Layout';
import { NextSeoProps, OrganizationJsonLd } from 'next-seo';
import { organizationJsonLd, seoConfigs } from 'next-seo.config';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from 'styles/AboutUs.module.scss';
import { Controller, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AWARDS, MILESTONES } from 'utils/constant';
import {
  introSotalabsImg,
  aboutSotatekImg,
  award1Img,
  award2Img,
  SotaHoldingsImg,
} from 'public/images';

const PlayVideoModal = dynamic(import('./PlayVideoModal'), {
  ssr: false,
});

const AboutUs = () => {
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getLinkImageAwards = (linkImage: string) => {
    switch (linkImage) {
      case '/images/award1.png':
        return award1Img;
      case '/images/award2.png':
        return award2Img;
      default:
        return award1Img;
    }
  };

  return (
    <div className={styles['about-us-wrap']}>
      <div className={`${styles['introduction']} ${styles['intro-mobile']}`}>
        <div className={`${styles['content-intro']} `}>
          <h1 className={styles['title-intro']}>
            About <span>Sota Labs</span>
          </h1>
          <div className={styles['des-intro']}>
            <p>
              Sota Labs is a startup studio and the product arm of Sota Tek, the
              largest web3 development company from Vietnam with 1000+ in-house
              blockchain enthusiasts.
            </p>
            <p>
              We believe in a decentralized future and doing our best to push
              blockchain adoption forward. We make Block Sniper as an
              infrastructure suite that empower web3 development.
            </p>
          </div>
        </div>
        <div className={styles['image-intro-wrap']}>
          <div className={styles['image-intro']}>
            <Image
              placeholder="blur"
              src={introSotalabsImg}
              alt="Sotalabs introduction"
            />
          </div>
          <div className={styles['image-logo']}>
            <BlocklensIcon />
          </div>
        </div>
      </div>
      <div className={styles['sota-company']}>
        <div className={styles[`title-company-mobile`]}>
          Sota labs is a subsidiary of
        </div>
        <div className={styles['title-company']}>
          <div className={styles['divider']}></div>
          <span>Sota labs is a subsidiary of</span>
          <Image src={SotaHoldingsImg} alt="Sota Holdings" />
          <div className={styles['divider']}></div>
        </div>
        <div className={styles['name-sub-companys']}>
          <div className="name-sub-companys">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={'auto'}
              loop={true}
              className="swiper-awards"
              breakpoints={{
                768: {
                  slidesPerView: 4,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <div className={styles['logo-sotatek']}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['logo-ekoios']}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['logo-sotanext']}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['logo-icetea']}></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className={styles['about-sotatek']}>
        <div className={styles['title-about-sotatek']}>
          <span>About Sotatek</span>
          <p>
            {'"'}We make sure Every Organization on the planet can approach
            State-of-the-art Technology Solutions{'"'}
          </p>
        </div>
        <div className={styles['desc-about-sotatek']}>
          <div className={styles['img-desc']} onClick={onOpen}>
            <Image
              placeholder="blur"
              src={aboutSotatekImg}
              alt="Sotatek introduction"
            />
            <div className={styles['btn-play-video']}>
              <PlayVideoIcon />
            </div>
          </div>
          <div className={styles['content-desc']}>
            <p>
              SotaTek (State-of-the-Art-Technology) head quatered in Hanoi,
              Vietnam, with other offices around the globe including US, Korea,
              Japan and Australia. Being a companion on the web3 journey,
              SotaTek has helped hundreds of businesses to build and launch
              their dapp to the market since 2015.
            </p>
            <p>
              Through years of experience, we know the struggles and what it
              takes to build a great dapp from Defi, Gamefi, NFT, and protocols.
              In Sota Labs, we transform all that knowledge to product suite for
              web3 developers.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['milestones']}>
        <div className={styles['milestones-title']}>
          <span>how we have grown up</span>
          <p>Milestones</p>
        </div>
        <div className={styles['milestones-desc']}>
          <div className="milestones-desc">
            <VerticalTimeline>
              {MILESTONES.map((mileston, index) => {
                return (
                  <VerticalTimelineElement
                    key={`${index} mileston`}
                    icon={
                      <div className={'icon-timeline'}>
                        <TimelineIcon />
                      </div>
                    }
                  >
                    <div className={'element-timeline'}>
                      <span>{mileston.content}</span>
                      <div>{mileston.year}</div>
                    </div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
        <div className={styles['milestiones-desc-mobile']}>
          {MILESTONES.map((mileston, index) => {
            return (
              <div
                className={styles['element-timeline']}
                key={`${index} milestiones`}
              >
                <span>{mileston.content}</span>
                <div>{mileston.year}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles['awards']}>
        <div className={styles['content-awards']}>
          <div className={styles['title-awards']}>
            Our <span>awards</span>
          </div>
          <div className={styles['desc-awards']}>
            Our expertises have been recognized globally by leading tech
            partners
          </div>
          <div className="control-swiper">
            <div className={styles['navigate-btn']}>
              <Swiper
                navigation={true}
                modules={[Controller, Navigation]}
                controller={{
                  control:
                    controlledSwiper && !controlledSwiper.destroyed
                      ? controlledSwiper
                      : null,
                }}
                slidesPerView={2}
                loop={true}
              >
                {AWARDS.map((award, index) => (
                  <SwiperSlide key={`${index} award`}>
                    <div className={styles['award-sota']}>
                      <Image
                        placeholder="blur"
                        src={getLinkImageAwards(award.image)}
                        alt={`award ${index}`}
                      />

                      <div>{award.date}</div>
                      <div>{award.title}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div>
            {' '}
            <Link
              href={'https://www.sotatek.com/'}
              target="_blank"
              rel="noreferrer"
              title="Click to read more about SotaTek"
            >
              <button className={styles['btn-read-more']}>Read more</button>
            </Link>
          </div>
        </div>
        <div className={styles['content-awards-wrap']}>
          <Swiper
            modules={[Controller]}
            slidesPerView={2}
            spaceBetween={24}
            loop={true}
            onSwiper={(a) => {
              setControlledSwiper(a);
            }}
          >
            {AWARDS.map((award, index) => (
              <SwiperSlide key={`${index} award`}>
                <div
                  className={styles['award-detail']}
                  onClick={() => window.open(award.linkPage, '_blank')}
                >
                  <Image
                    placeholder="blur"
                    src={getLinkImageAwards(award.image)}
                    alt={`award ${index}`}
                  />

                  <div className={styles['award-date']}>{award.date}</div>
                  <div className={styles['award-title']}>{award.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles['content-awards-mobile-wrap']}>
          <div className={styles['content-awards-mobile']}>
            {AWARDS.map((award, index) => (
              <div
                className={styles['award-detail-mobile']}
                key={`${index} award`}
                onClick={() => window.open(award.linkPage, '_blank')}
              >
                <Image
                  placeholder="blur"
                  src={getLinkImageAwards(award.image)}
                  alt={`award ${index}`}
                />

                <div className={styles['award-date']}>{award.date}</div>
                <div className={styles['award-title']}>{award.title}</div>
              </div>
            ))}
          </div>
        </div>
        <Link
          href={'https://www.sotatek.com/'}
          target="_blank"
          rel="noreferrer"
          title="Click to read more about SotaTek"
        >
          <button className={styles['btn-read-more-mobile']}>Read more</button>
        </Link>
      </div>
      <PlayVideoModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default AboutUs;

AboutUs.getLayout = function getLayout(page: ReactElement) {
  const seoProps: NextSeoProps = {
    title: `${seoConfigs.title} - About us`,
  };
  return (
    <>
      <Layout className="about-us-container" {...seoProps}>
        <OrganizationJsonLd {...organizationJsonLd} />
        {page}
      </Layout>
    </>
  );
};
