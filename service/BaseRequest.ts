import config from 'config';
import axios from 'axios';

export default class BaseRequest {
  protected accessToken = '';

  getUrlPrefix() {
    return config.api.baseUrlApi;
  }

  async get(url: string, params?: any) {
    try {
      const config = {
        params,
      };
      const response = await axios.get(this.getUrlPrefix() + url, config);
      return this._responseHandler(response);
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  async put(url: any, data?: any) {
    try {
      const response = await axios.put(this.getUrlPrefix() + url, data);
      return this._responseHandler(response);
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  async patch(url: any, data?: any) {
    try {
      const response = await axios.patch(this.getUrlPrefix() + url, data);
      return this._responseHandler(response);
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  async post(url: any, data?: any) {
    try {
      const response = await axios.post(this.getUrlPrefix() + url, data);
      return this._responseHandler(response);
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  async delete(url: any, data?: any) {
    try {
      const config = {
        data,
      };
      const response = await axios.delete(this.getUrlPrefix() + url, config);
      return this._responseHandler(response);
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  async download(url: any, data?: any) {
    try {
      const config = {
        ...data,
        responseType: 'blob',
      };
      const response = await axios.get(this.getUrlPrefix() + url, config);
      return this._responseHandler(response);
    } catch (error) {
      return this._errorHandler(error);
    }
  }

  async _responseHandler(response: any) {
    return response.data;
  }

  async _errorHandler(err: any) {
    if (err.response) {
      console.log('===errorHandler', JSON.stringify(err.response));
      console.log('===errorHandler data', JSON.stringify(err.response.data));
      console.log(
        '===errorHandler status',
        JSON.stringify(err.response?.status),
      );
      console.log(
        '===errorHandler headers',
        JSON.stringify(err.response.headers),
      );
    } else {
      console.log('==errorHandler', JSON.stringify(err));
    }
    if (err.response && err.response.data && err.response.data.message) {
      if (typeof err.response.data.message === 'string') {
        throw new Error(err.response.data.message);
      }
      throw new Error(err.response.data.message[0]);
    }
    if (err.response && err.response.data && err.response.data.error) {
      throw new Error(err.response.data.error);
    }
    throw err;
  }
}
