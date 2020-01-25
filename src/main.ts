import axios from 'axios';
import { Contacts } from './handlers/contacts';
import { Objects } from './handlers/objects';

const DEFAULT_API_GATEWAY = "https://api.ontraport.com/1";
const DEFAULT_TIMEOUT = 30000;

interface OntraportSettings {
  apiAppId: string;
  apiSecret: string;
  gateway?: string;
  timeout?: number;
}

export class OntraportJS {
  API_APP_ID = null;
  API_SECRET = null;
  API_GATEWAY = null;
  
  public static contacts: Contacts = null;
  public static objects: Objects = null;
  
  constructor(config: OntraportSettings) {
    this.API_APP_ID = process.env.ONTRA_API_APP_ID || config.apiAppId;
    this.API_SECRET = process.env.ONTRA_API_SECRET || config.apiSecret;
    this.API_GATEWAY = process.env.ONTRA_API_GATEWAY || config.gateway || DEFAULT_API_GATEWAY;

    const axiosIntance = axios.create({
      baseURL: this.API_GATEWAY,
      timeout: config.timeout || DEFAULT_TIMEOUT,
      headers: {
        'Api-Key': this.API_SECRET,
        'Api-Appid': this.API_APP_ID
      }
    });

    OntraportJS.contacts = new Contacts(axiosIntance, this);
    OntraportJS.objects = new Objects(axiosIntance, this);
  }
}
