import { AxiosInstance } from 'axios';
import { HttpClient } from '../http';
import { OntraportJS } from '../main';
import { AddTagRequest, AddTagByNameRequest } from '../types/object';

export class Objects extends HttpClient {  
  context: OntraportJS = null; 
  
  constructor(axios: AxiosInstance, context: OntraportJS) {
    super(axios);
    context = context;
  }

  public async addTag(request: AddTagRequest) {
    return await this.putForm('/objects/tag', {
      ...request,
      ids: request.ids.join(','),
      add_list: request.add_list.join(',')
    });
  }
  
  public async addTagByName(request: AddTagByNameRequest) {
    return await this.put('/objects/tagByName', {
      ...request,
      ids: request.ids,
      add_names: request.add_names
    });
  }
}
