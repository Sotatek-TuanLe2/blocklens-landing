import {
  NextSeoProps,
  OrganizationJsonLdProps,
  ProductJsonLdProps,
} from 'next-seo';
import { MetaTag, OpenGraph } from 'next-seo/lib/types';

type SocialMedia = {
  url: string;
  icon: string;
};

interface ILinkTag {
  rel: string;
  href: string;
  sizes?: string;
  media?: string;
  type?: string;
  color?: string;
  keyOverride?: string;
  as?: string;
  crossOrigin?: string;
}

interface ISeoConfigs {
  title: string;
  description: string;
  siteName: string;
  logo: string;
  url: string;
  contact: {
    phone: {
      number: string;
      alias: string;
    };
    email: string;
    website: string;
    address: string;
  };
  socialMedia: {
    twitter: SocialMedia;
    facebook: SocialMedia;
    telegram: SocialMedia;
    linkedin: SocialMedia;
  };
  organization: {
    type: string;
    name: string;
    legalName: string;
  };
  openGraph?: OpenGraph;
  metaTags?: ReadonlyArray<MetaTag>;
  linkTags?: ReadonlyArray<ILinkTag>;
}

export const seoConfigs: ISeoConfigs = {
  title: 'Blocklens',
  description: 'Blocklens pushes on-chain events to your back-end web hooks. Track your smart-contracts, NFT, addresses in real-time.',
  siteName: 'Blocklens',
  logo: '/favicon.ico',
  url: 'https://blocklens.io',
  contact: {
    phone: {
      number: '02466585248',
      alias: '+84-(0)24-6658-5248'
    },
    email: 'contact@sotatek.com',
    website: 'https://www.sotatek.com/',
    address: '2F, 7F & 11F, CIC Tower, Lane 219 Trung Kinh Street, Cau Giay, Hanoi, Vietnam'
  },
  socialMedia: {
    twitter: {
      url: '',
      icon: ''
    },
    facebook: {
      url: '',
      icon: ''
    },
    linkedin: {
      url: '',
      icon: ''
    },
    telegram: {
      url: '',
      icon: ''
    }
  },
  organization: {
    type: 'Corporation',
    name: 'Sota Labs',
    legalName: 'SOTA LABS TECHNOLOGY JOINT STOCK COMPANY'
  },
  metaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#da532c'
    },
    {
      name: 'theme-color',
      content: '#ffffff'
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:domain',
      content: 'blocklens.io',
    },
    {
      property: 'twitter:url',
      content: 'https://blocklens.io'
    },
    {
      name: 'twitter:title',
      content: 'Blocklens',
    },
    {
      name: 'twitter:description',
      content: 'Blocklens pushes on-chain events to your back-end web hooks. Track your smart-contracts, NFT, addresses in real-time.',
    },
    {
      name: 'twitter:image',
      content: '/opengraph.jpg',
    }
  ],
  linkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg'
    },
  ]
};

export const defaultSEO: NextSeoProps = {
  title: seoConfigs.title,
  description: seoConfigs.description,
  openGraph: {
    site_name: seoConfigs.siteName,
    title: seoConfigs.title,
    description: seoConfigs.description,
    images: [
      {
        url: '/opengraph.jpg',
      }
    ],
  },
  canonical: seoConfigs.url,
  additionalMetaTags: seoConfigs.metaTags,
  additionalLinkTags: seoConfigs.linkTags,
};

export const productJsonLd: ProductJsonLdProps = {
  productName: seoConfigs.title,
  images: [
    seoConfigs.logo,
    '/images/chart.png'
  ],
  description: seoConfigs.description,
  brand: seoConfigs.organization.name,
  manufacturerName: seoConfigs.organization.legalName,
  slogan: 'Listen to on-chain activities',
  disambiguatingDescription: 'Blockchain made simple. Remove the hassle of syncing and maintaining data/transactions between on-chain and off-chain. No fullnode setup, No code, Multichain.',
  releaseDate: '2022',
  reviews: [
    {
      author: 'Leo - CEO Fizen',
      reviewBody: 'Block Lens saved us 2 months of development with its no-code platform. On-chain synchronization is a must for web3 application and develop it by ourself is extremely time consuming.',
      reviewRating: {
        ratingValue: '5'
      }
    },
    {
      author: 'Thi Truong - Founder gamefi.org',
      reviewBody: 'Thanks to Block Lens, we’ve cut our spend for infrastructure. Maintaining a blockchain node or hosting blockchain crawler servers is costly nowaday.',
      reviewRating: {
        ratingValue: '5'
      }
    },
    {
      author: 'Louis - Founder Crypto Hawk',
      reviewBody: 'Building dApp has never been easier with Block Lens. It supports everything we need to make our platform aware of on-chain events and keep our users engaged with the application.',
      reviewRating: {
        ratingValue: '5'
      }
    }
  ],
  offers: [
    {
      price: 'Free',
      priceCurrency: 'USD',
      seller: {
        name: 'STARTER'
      }
    },
    {
      price: '29',
      priceCurrency: 'USD',
      seller: {
        name: 'BASIC'
      }
    },
    {
      price: '119',
      priceCurrency: 'USD',
      seller: {
        name: 'GROWTH'
      }
    },
    {
      price: '479',
      priceCurrency: 'USD',
      seller: {
        name: 'PROFESSIONAL'
      }
    }
  ]
};

export const organizationJsonLd: OrganizationJsonLdProps = {
  type: 'Corporation',
  logo: '/images/sotalabs-logo.svg',
  legalName: seoConfigs.organization.legalName,
  name: seoConfigs.organization.name,
  address: '2F, CIC Tower, No.2 Nguyen Thi Due, Yen Hoa, Cau Giay, Hanoi, Vietnam',
  contactPoints: [
    {
      contactType: 'customer service',
      telephone: seoConfigs.contact.phone.number,
      email: seoConfigs.contact.email
    },
  ],
  url: seoConfigs.contact.website
};