import React from 'react';
import Link from 'next/link';
import styles from 'styles/components/Footer.module.scss';

const menus = [
  {
    name: 'Developer',
    path: '/developer',
  },
  {
    name: 'Documentation',
    path: '/documentation',
  },
  {
    name: 'About us',
    path: '/about-us',
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
];

const linkTerms = [
  {
    name: 'Privacy Policy',
    path: '/privacy-policy',
  },
  {
    name: 'Terms of Service',
    path: '/terms',
  },
];

const Footer = () => {
  return (
    <div className={styles['footer-landing']}>
      <div className={styles['box-info']}>
        <img src="/images/logo.png" alt="logo" />

        <div className={styles['description']}>
          Block Lens pushes on-chain events to your back-end web hooks.
          Reliable, configurable, real-time. Get started for free now!
        </div>
        <div className={styles['name']}>© 2022, Block Lens</div>
      </div>

      <div className={styles['menus-link']}>
        <div className={styles['menus']}>
          <div>Company</div>
          {menus.map((item, index) => {
            return (
              <Link
                className={styles['menu-item']}
                href={item.path}
                key={index}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className={styles['menus']}>
          {linkTerms.map((item, index) => {
            return (
              <Link
                className={styles['menu-item']}
                href={item.path}
                key={index}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
