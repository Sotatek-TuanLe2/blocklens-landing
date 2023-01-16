import BaseRequest from './BaseRequest';
import config from 'config';
import { IDataFormContact } from 'pages/contact-us/index.page';

export default class UserRequest extends BaseRequest {
  getUrlPrefix() {
    return config.api.baseUrlApi;
  }

  contactToAdmin(params: IDataFormContact) {
    const url = `/public/users/contact`;
    return this.post(url, params);
  }
}
