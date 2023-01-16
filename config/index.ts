import dev from './dev.json';
const env = process.env.REACT_APP_ENV || 'dev';

const configs: any = {
  dev,
};

const config: Config = configs[env];

export interface Config {
  api: {
    baseUrlApi: string;
  };
}

export default config;
