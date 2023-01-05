import {
  NextSeoProps,
  OrganizationJsonLdProps,
  ProductJsonLdProps,
} from 'next-seo';

type SocialMedia = {
  url: string;
  icon: string;
};

interface ISeoConfigs {
  title: string;
  description: string;
  siteName: string;
  logo: string;
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
}
