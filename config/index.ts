import dev from './dev.json';
import prod from './prod.json';
const env = process.env.REACT_APP_ENV || 'dev';

const configs: any = {
  dev,
  prod,
};

const config: Config = configs[env];

export interface Config {
  api: {
    baseUrlApi: string;
  };
  reCaptchaKey: string;
}

export default config;
