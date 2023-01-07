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
  title: 'Blocksniper',
  description: 'Blocksniper pushes on-chain events to your back-end web hooks. Track your smart-contracts, NFT, addresses in real-time.',
  siteName: 'Blocksniper',
  logo: '/favicon.ico',
  url: 'https://blocksniper.io',
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
      content: 'blocksniper.io',
    },
    {
      property: 'twitter:url',
      content: 'https://blocksniper.io'
    },
    {
      name: 'twitter:title',
      content: 'Blocksniper',
    },
    {
      name: 'twitter:description',
      content: 'Blocksniper pushes on-chain events to your back-end web hooks. Track your smart-contracts, NFT, addresses in real-time.',
    },
    {
      name: 'twitter:image',
      content: 'https://blocksniper.io/opengraph.jpeg?v=1',
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
        url: 'https://blocksniper.io/opengraph.jpeg?v=1',
      }
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  canonical: seoConfigs.url,
  additionalMetaTags: seoConfigs.metaTags,
  additionalLinkTags: seoConfigs.linkTags,
};