import Link from 'next/link';
import { FC, useState } from 'react';
import { CloseMenuIcon, IconMenuMobile } from 'components/Icons';
import styles from 'styles/components/Header.module.scss';
import { BLOCKLENS_LOGIN_URL } from 'utils/constant';

interface IHeader {
  isFixedHeader: boolean;
}

const Header: FC<IHeader> = ({ isFixedHeader }) => {
  const [isShowHeader, setIsShowHeader] = useState<boolean>(false);

  const menus = [
    {
      name: 'Developer',
      path: '/',
    },
    {
      name: 'Documentation',
      path: '',
    },
    {
      name: 'About us',
      path: '/',
    },
    {
      name: 'Pricing',
      path: '/pricing',
    },
  ];
  const getClassName = () => {
    if (isFixedHeader && isShowHeader)
      return `${styles[`header-landing`]} ${styles['fixed']} ${
        styles['mobile']
      }`;
    else if (isFixedHeader && !isShowHeader)
      return `${styles[`header-landing`]} ${styles['fixed']}`;
    else if (!isFixedHeader && !isShowHeader) return styles[`header-landing`];
    else return `${styles[`header-landing`]} ${styles['mobile']}`;
  };

  return (
    <div className={getClassName()}>
      <div className={styles['content']}>
        <div>
          <Link href={'/'}>
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className={`${styles['desktop-ui']}`}>
          <div className={`${styles['menus']}`}>
            {menus.map((item, index) => {
              return (
                <Link
                  className={`${styles['menu']}`}
                  href={item.path}
                  key={index}
                >
                  {item.name}
                </Link>
              );
            })}
            <div>
              <Link href={BLOCKLENS_LOGIN_URL} target="_blank">
                <button className={` ${styles['btn-primary']}`}>Log in</button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`${styles['mobile-ui']}`}
          onClick={() => setIsShowHeader(!isShowHeader)}
        >
          {isShowHeader ? <CloseMenuIcon /> : <IconMenuMobile />}
        </div>
      </div>

      {isShowHeader && (
        <div className={`${styles['menus-mobile']}`}>
          {menus.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                onClick={() => setIsShowHeader(false)}
              >
                {item.name}
              </Link>
            );
          })}

          <div>
            <Link href={BLOCKLENS_LOGIN_URL} target="_blank">
              <button className={styles['btn-primary']}>Log in</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
