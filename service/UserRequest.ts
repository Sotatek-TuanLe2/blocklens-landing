import BaseRequest from './BaseRequest';
import config from 'config';

export default class UserRequest extends BaseRequest {
  getUrlPrefix() {
    return config.api.baseUrlApi;
  }

  contactToAdmin(params: any) {
    const url = `/public/users/contact`;
    return this.post(url, params);
  }
}
