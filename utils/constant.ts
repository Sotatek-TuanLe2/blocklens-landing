export const BLOCKLENS_LOGIN_URL =
  process.env.NEXT_PUBLIC_ENV === 'dev'
    ? 'https://dev-blocksniper.bunicorn.finance/login'
    : 'https://console.blocklens.io/login';
export const BLOCKLENS_SINGUP_URL =
  process.env.NEXT_PUBLIC_ENV === 'dev'
    ? 'https://dev-blocksniper.bunicorn.finance/sign-up'
    : 'https://console.blocklens.io/sign-up';
export const BLOCKLENS_LIVECHAT_SCRIPT =
  '//code.tidio.co/xf1rnuwtrz8ldu8dkp2l0twgubtfztyb.js';

export const LANDING_FEATURES: {
  name: string;
  description: string;
  image: string;
}[] = [
  {
    name: 'Push notifications',
    description:
      'Notify users of critical events at every step of their journey. Increase user engagement and retention by 100%.',
    image: 'push-notifications.png',
  },
  {
    name: 'Advanced events',
    description:
      'Not just address and NFT, Block Lens allows developers to upload their smart contract ABI and specify which one to listen to.',
    image: 'advanced-events.png',
  },
  {
    name: 'Simple integration',
    description:
      'Create a new web hook with 1 click and start getting on-chain updates instantly.',
    image: 'simple-integration.png',
  },
];

export const LANDING_USE_CASES: {
  name: string;
  description: string;
  image: string;
}[] = [
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

export const LANDING_FEEDBACKS: {
  name: string;
  title: string;
  description: string;
}[] = [
  {
    name: 'Leo',
    title: 'CEO Fizen',
    description:
      'Block Lens saved us 2 months of development with its no-code platform. On-chain synchronization is a must for web3 application and develop it by ourself is extremely time consuming.',
  },
  {
    name: 'Thi Truong',
    title: 'Founder gamefi.org',
    description:
      'Thanks to Block Lens, we’ve cut our spend for infrastructure. Maintaining a blockchain node or hosting blockchain crawler servers is costly nowaday.',
  },
  {
    name: 'Louis',
    title: 'Founder Crypto Hawk',
    description:
      'Building dApp has never been easier with Block Lens. It supports everything we need to make our platform aware of on-chain events and keep our users engaged with the application.',
  },
];

export const PRICING_PACKAGES: {
  NAME: string;
  PRICE: string;
  SERVICE: string[];
  BADGE: string;
}[] = [
  {
    NAME: 'STARTER',
    PRICE: '0',
    SERVICE: ['2 apps', '100 messages/day', 'All supported chains'],
    BADGE: '',
  },
  {
    NAME: 'BASIC',
    PRICE: '29',
    SERVICE: ['5 apps', '500 messages/day', 'All supported chains'],
    BADGE: '',
  },
  {
    NAME: 'GROWTH',
    PRICE: '119',
    SERVICE: ['7 apps', '2,500 messages/day', 'All supported chains'],
    BADGE: 'Popular',
  },
  {
    NAME: 'PROFESSIONAL',
    PRICE: '479',
    SERVICE: ['15 apps', '12,000 messages/day', 'All supported chains'],
    BADGE: '',
  },
];

export const PRICING_NETWORKS: {
  name: string;
  free: string;
  starter: string;
  growth: string;
  professional: string;
}[] = [
  {
    name: 'Mainnet, Testnet',
    free: 'true',
    starter: 'true',
    growth: 'true',
    professional: 'true',
  },
  {
    name: 'All supported chains',
    free: 'true',
    starter: 'true',
    growth: 'true',
    professional: 'true',
  },
  {
    name: 'Apps',
    free: '2',
    starter: '5',
    growth: '7',
    professional: '15',
  },
  {
    name: 'Daily messages',
    free: '100',
    starter: '500',
    growth: '2,500',
    professional: '12,000',
  },
];

export const PRICING_PLANS: {
  name: string;
  mainTestNet: string;
  archiveDate: string;
  activeApps: string;
  messagesCount: string;
  linkStarted: string;
}[] = [
  {
    name: 'STARTER',
    mainTestNet: 'Mainnet, TestNet',
    archiveDate: 'All supported chains',
    activeApps: '2 apps',
    messagesCount: '100 messsages/day',
    linkStarted: '/',
  },
  {
    name: 'BASIC',
    mainTestNet: 'Mainnet, TestNet',
    archiveDate: 'All supported chains',
    activeApps: '5 apps',
    messagesCount: '500 messsages/day',
    linkStarted: '/',
  },
  {
    name: 'GROWTH',
    mainTestNet: 'Mainnet, TestNet',
    archiveDate: 'All supported chains',
    activeApps: '7 apps',
    messagesCount: '2,500 messsages/day',
    linkStarted: '/',
  },
  {
    name: 'PROFESSIONAL',
    mainTestNet: 'Mainnet, TestNet',
    archiveDate: 'All supported chains',
    activeApps: '15 apps',
    messagesCount: '12,000 messsages/day',
    linkStarted: '/',
  },
];

export const MILESTONES = [
  { content: 'Company establishment in Hanoi, Vietnam.', year: '2015' },
  {
    content: 'Successfully laid the foundation of global expansion.',
    year: '2016',
  },
  {
    content:
      "Opened 2 offices in Tokyo and Osaka, Japan; Expanded 70% of in-house resources at SotaTek's Vietnam Development Center.",
    year: '2017',
  },
  { content: 'Catered to SMEs and MNCs from 14+ countries.', year: '2018' },
  {
    content: 'Top Asia-Pacific (APAC) Accelerators awarded by Business APAC.',
    year: '2019',
  },
  {
    content:
      "Trusted partner of Vietnam's Government in major IT projects & blockchain solutions.",
    year: '2020',
  },
  {
    content:
      'Established Sota Holdings; Awarded top 10 ICT - top Software & Blockchain company in Vietnam; Witnessed 300%+ revenue growth.',
    year: '2021',
  },
  {
    content:
      'Launched SotaTek Australia office in Sydney; Successful Co-Branding Partnership with Big Brands; Moving towards IPO & greater goals.',
    year: '2022',
  },
];

export const AWARDS = [
  {
    image: '/images/award1.png',
    date: 'December 22, 2022',
    title: 'Sotatek Ranks Top #1 B2B Firms in Vietnam 2022.',
    linkPage:
      'https://www.sotatek.com/sotatek-ranks-top-1-b2b-firms-in-vietnam-2022/',
  },
  {
    image: '/images/award2.png',
    date: 'December 30, 2022',
    title: 'Sotatek Hit the Top Spot on Top 10 Blockchain Services Pro...',
    linkPage:
      'https://www.sotatek.com/sotatek-hits-the-top-spot-on-top-10-blockchain-services-providers-award-2022/',
  },
];
