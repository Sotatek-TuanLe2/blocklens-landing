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
    image: 'push-notifications',
  },
  {
    name: 'Advanced events',
    description:
      'Not just address and NFT, Block Lens allows developers to upload their smart contract ABI and specify which one to listen to.',
    image: 'advanced-events',
  },
  {
    name: 'Simple integration',
    description:
      'Create a new web hook with 1 click and start getting on-chain updates instantly.',
    image: 'simple-integration',
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
      'Notify whenever a new transaction occurs on your address. Track your wallet balance, no more waiting for every new block.',
    image: 'address-transaction',
  },
  {
    name: '2. Smart contract transactions',
    description:
      'Get to know when a swap, an in-game action, purchases, and other smart-contract transactions were made instantly. Upload your smart contract ABI and specify which method to receive webhook when being called.',
    image: 'smart-contract-transaction',
  },
  {
    name: '3. NFT activities',
    description:
      'Notify your users when their NFT is minted, transferred to other users. Congrats your users once their in-game NFT is sold, their items are available for sale and much more.',
    image: 'nft-activity',
  },
  {
    name: '4. Failed transactions',
    description:
      'Getting alerts when there is a failed transaction in your smart contract to notify users, aware of hacking attempts. No more refreshing web pages to check for failed transactions.',
    image: 'failed-transaction',
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

export const MILESTONES: {
  content: string;
  year: string;
}[] = [
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

export const AWARDS: {
  image: string;
  date: string;
  title: string;
  linkPage: string;
}[] = [
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

export const COUNTRIES = [
  {
    name: 'Afghanistan',
  },
  {
    name: 'Åland Islands',
  },
  {
    name: 'Albania',
  },
  {
    name: 'Algeria',
  },
  {
    name: 'Andorra',
  },
  {
    name: 'Angola',
  },
  {
    name: 'Anguilla',
  },
  {
    name: 'Antarctica',
  },
  {
    name: 'Antigua & Barbuda',
  },
  {
    name: 'Argentina',
  },
  {
    name: 'Armenia',
  },
  {
    name: 'Aruba',
  },
  {
    name: 'Australia',
  },
  {
    name: 'Austria',
  },
  {
    name: 'Azerbaijan',
  },
  {
    name: 'Bahamas',
  },
  {
    name: 'Bahrain',
  },
  {
    name: 'Bangladesh',
  },
  {
    name: 'Barbados',
  },
  {
    name: 'Belarus',
  },
  {
    name: 'Belgium',
  },
  {
    name: 'Belize',
  },
  {
    name: 'Benin',
  },
  {
    name: 'Bermuda',
  },
  {
    name: 'Bhutan',
  },
  {
    name: 'Bolivia',
  },
  {
    name: 'Bosnia & Herzegovina',
  },
  {
    name: 'Botswana',
  },
  {
    name: 'Bouvet Island',
  },
  {
    name: 'Brazil',
  },
  {
    name: 'British Indian Ocean Territory',
  },
  {
    name: 'British Virgin Islands',
  },
  {
    name: 'Brunei',
  },
  {
    name: 'Bulgaria',
  },
  {
    name: 'Burkina Faso',
  },
  {
    name: 'Burundi',
  },
  {
    name: 'Cambodia',
  },
  {
    name: 'Cameroon',
  },
  {
    name: 'Canada',
  },
  {
    name: 'Cape Verde',
  },
  {
    name: 'Caribbean Netherlands',
  },
  {
    name: 'Cayman Islands',
  },
  {
    name: 'Central African Republic',
  },
  {
    name: 'Chad',
  },
  {
    name: 'Chile',
  },
  {
    name: 'China',
  },
  {
    name: 'Colombia',
  },
  {
    name: 'Comoros',
  },
  {
    name: 'Congo - Brazzaville',
  },
  {
    name: 'Congo - Kinshasa',
  },
  {
    name: 'Cook Islands',
  },
  {
    name: 'Costa Rica',
  },
  {
    name: 'Côte d’Ivoire',
  },
  {
    name: 'Croatia',
  },
  {
    name: 'Curaçao',
  },
  {
    name: 'Cyprus',
  },
  {
    name: 'Czechia',
  },
  {
    name: 'Denmark',
  },
  {
    name: 'Djibouti',
  },
  {
    name: 'Dominica',
  },
  {
    name: 'Dominican Republic',
  },
  {
    name: 'Ecuador',
  },
  {
    name: 'Egypt',
  },
  {
    name: 'El Salvador',
  },
  {
    name: 'Equatorial Guinea',
  },
  {
    name: 'Eritrea',
  },
  {
    name: 'Estonia',
  },
  {
    name: 'Eswatini',
  },
  {
    name: 'Ethiopia',
  },
  {
    name: 'Falkland Islands',
  },
  {
    name: 'Faroe Islands',
  },
  {
    name: 'Fiji',
  },
  {
    name: 'Finland',
  },
  {
    name: 'France',
  },
  {
    name: 'French Guiana',
  },
  {
    name: 'French Polynesia',
  },
  {
    name: 'French Southern Territories',
  },
  {
    name: 'Gabon',
  },
  {
    name: 'Gambia',
  },
  {
    name: 'Georgia',
  },
  {
    name: 'Germany',
  },
  {
    name: 'Ghana',
  },
  {
    name: 'Gibraltar',
  },
  {
    name: 'Greece',
  },
  {
    name: 'Greenland',
  },
  {
    name: 'Grenada',
  },
  {
    name: 'Guadeloupe',
  },
  {
    name: 'Guam',
  },
  {
    name: 'Guatemala',
  },
  {
    name: 'Guernsey',
  },
  {
    name: 'Guinea',
  },
  {
    name: 'Guinea-Bissau',
  },
  {
    name: 'Guyana',
  },
  {
    name: 'Haiti',
  },
  {
    name: 'Honduras',
  },
  {
    name: 'Hong Kong SAR China',
  },
  {
    name: 'Hungary',
  },
  {
    name: 'Iceland',
  },
  {
    name: 'India',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'Iraq',
  },
  {
    name: 'Ireland',
  },
  {
    name: 'Isle of Man',
  },
  {
    name: 'Israel',
  },
  {
    name: 'Italy',
  },
  {
    name: 'Jamaica',
  },
  {
    name: 'Japan',
  },
  {
    name: 'Jersey',
  },
  {
    name: 'Jordan',
  },
  {
    name: 'Kazakhstan',
  },
  {
    name: 'Kenya',
  },
  {
    name: 'Kiribati',
  },
  {
    name: 'Kosovo',
  },
  {
    name: 'Kuwait',
  },
  {
    name: 'Kyrgyzstan',
  },
  {
    name: 'Laos',
  },
  {
    name: 'Latvia',
  },
  {
    name: 'Lebanon',
  },
  {
    name: 'Lesotho',
  },
  {
    name: 'Liberia',
  },
  {
    name: 'Libya',
  },
  {
    name: 'Liechtenstein',
  },
  {
    name: 'Lithuania',
  },
  {
    name: 'Luxembourg',
  },
  {
    name: 'Macao SAR China',
  },
  {
    name: 'Madagascar',
  },
  {
    name: 'Malawi',
  },
  {
    name: 'Malaysia',
  },
  {
    name: 'Maldives',
  },
  {
    name: 'Mali',
  },
  {
    name: 'Malta',
  },
  {
    name: 'Martinique',
  },
  {
    name: 'Mauritania',
  },
  {
    name: 'Mauritius',
  },
  {
    name: 'Mayotte',
  },
  {
    name: 'Mexico',
  },
  {
    name: 'Moldova',
  },
  {
    name: 'Monaco',
  },
  {
    name: 'Mongolia',
  },
  {
    name: 'Montenegro',
  },
  {
    name: 'Montserrat',
  },
  {
    name: 'Morocco',
  },
  {
    name: 'Mozambique',
  },
  {
    name: 'Myanmar (Burma)',
  },
  {
    name: 'Namibia',
  },
  {
    name: 'Nauru',
  },
  {
    name: 'Nepal',
  },
  {
    name: 'Netherlands',
  },
  {
    name: 'New Caledonia',
  },
  {
    name: 'New Zealand',
  },
  {
    name: 'Nicaragua',
  },
  {
    name: 'Niger',
  },
  {
    name: 'Nigeria',
  },
  {
    name: 'Niue',
  },
  {
    name: 'North Macedonia',
  },
  {
    name: 'Norway',
  },
  {
    name: 'Oman',
  },
  {
    name: 'Pakistan',
  },
  {
    name: 'Palestinian Territories',
  },
  {
    name: 'Panama',
  },
  {
    name: 'Papua New Guinea',
  },
  {
    name: 'Paraguay',
  },
  {
    name: 'Peru',
  },
  {
    name: 'Philippines',
  },
  {
    name: 'Pitcairn Islands',
  },
  {
    name: 'Poland',
  },
  {
    name: 'Portugal',
  },
  {
    name: 'Puerto Rico',
  },
  {
    name: 'Qatar',
  },
  {
    name: 'Réunion',
  },
  {
    name: 'Romania',
  },
  {
    name: 'Russia',
  },
  {
    name: 'Rwanda',
  },
  {
    name: 'Samoa',
  },
  {
    name: 'San Marino',
  },
  {
    name: 'São Tomé & Príncipe',
  },
  {
    name: 'Saudi Arabia',
  },
  {
    name: 'Senegal',
  },
  {
    name: 'Serbia',
  },
  {
    name: 'Seychelles',
  },
  {
    name: 'Sierra Leone',
  },
  {
    name: 'Singapore',
  },
  {
    name: 'Sint Maarten',
  },
  {
    name: 'Slovakia',
  },
  {
    name: 'Slovenia',
  },
  {
    name: 'Solomon Islands',
  },
  {
    name: 'Somalia',
  },
  {
    name: 'South Africa',
  },
  {
    name: 'South Georgia & South Sandwich Islands',
  },
  {
    name: 'South Korea',
  },
  {
    name: 'South Sudan',
  },
  {
    name: 'Spain',
  },
  {
    name: 'Sri Lanka',
  },
  {
    name: 'St. Barthélemy',
  },
  {
    name: 'St. Helena',
  },
  {
    name: 'St. Kitts & Nevis',
  },
  {
    name: 'St. Lucia',
  },
  {
    name: 'St. Martin',
  },
  {
    name: 'St. Pierre & Miquelon',
  },
  {
    name: 'St. Vincent & Grenadines',
  },
  {
    name: 'Suriname',
  },
  {
    name: 'Svalbard & Jan Mayen',
  },
  {
    name: 'Sweden',
  },
  {
    name: 'Switzerland',
  },
  {
    name: 'Taiwan',
  },
  {
    name: 'Tajikistan',
  },
  {
    name: 'Tanzania',
  },
  {
    name: 'Thailand',
  },
  {
    name: 'Timor-Leste',
  },
  {
    name: 'Togo',
  },
  {
    name: 'Tokelau',
  },
  {
    name: 'Tonga',
  },
  {
    name: 'Trinidad & Tobago',
  },
  {
    name: 'Tristan da Cunha',
  },
  {
    name: 'Tunisia',
  },
  {
    name: 'Turkey',
  },
  {
    name: 'Turkmenistan',
  },
  {
    name: 'Turks & Caicos Islands',
  },
  {
    name: 'Tuvalu',
  },
  {
    name: 'Uganda',
  },
  {
    name: 'Ukraine',
  },
  {
    name: 'United Arab Emirates',
  },
  {
    name: 'United Kingdom',
  },
  {
    name: 'United States',
  },
  {
    name: 'Uruguay',
  },
  {
    name: 'Uzbekistan',
  },
  {
    name: 'Vanuatu',
  },
  {
    name: 'Vatican City',
  },
  {
    name: 'Venezuela',
  },
  {
    name: 'Vietnam',
  },
  {
    name: 'Wallis & Futuna',
  },
  {
    name: 'Western Sahara',
  },
  {
    name: 'Yemen',
  },
  {
    name: 'Zambia',
  },
  {
    name: 'Zimbabwe',
  },
];
