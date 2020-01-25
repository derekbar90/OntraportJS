import { Method, AxiosInstance } from 'axios';
import * as qs from 'qs';

class OntraportRequestError extends Error {
  constructor(url: string, status: string, message: string) {
    super(`${url} responded with an error: (${status}) ${message}`);
    this.name = "OntraportRequestError";
  }
}

export class HttpClient {  
  axios = null;
  
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  private request = async (method: Method, url: string, payload: any, headers: any = {}): Promise<any> => {
    try{ 
      const response = await this.axios({
        method,
        url,
        headers: {
          ...headers
        },
        data: payload
      });
      return response.data;
    } catch (e) {
      throw new OntraportRequestError(url, e.status, e.message);
    }
    
  };

  /**
   * get
   */
  public async get(url: string, payload: any) {
    const { data } = await this.request('get', url, payload);
    return data;
  }
  
  public async getForm(url: string, payload: any) {
    const { data } = await this.request('get', url, payload ? qs.stringify(payload) : null, {'content-type': 'application/x-www-form-urlencoded'});
    return data;
  }
  
  public async postForm(url: string, payload: any) {
    const { data } = await this.request('post', url, payload ? qs.stringify(payload) : null, {'content-type': 'application/x-www-form-urlencoded'});
    return data;
  }

  public async post(url: string, payload: any) {
    const { data } = await this.request('post', url, payload);
    return data;
  }

  public async putForm(url: string, payload: any) {
    const { data } = await this.request('put', url, payload ? qs.stringify(payload) : null, {'content-type': 'application/x-www-form-urlencoded'});
    return data;
  }

  public async put(url: string, payload: any) {
    const { data } = await this.request('put', url, payload);
    return data;
  }
}
