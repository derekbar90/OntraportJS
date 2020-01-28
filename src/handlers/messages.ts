import { AxiosInstance } from 'axios';
import { HttpClient } from '../http';
import { CreateMessageRequest, Message, UpdateMessageRequest } from '../types/message';

export class Messages extends HttpClient {  
  constructor(axios: AxiosInstance) {
    super(axios);
  }

  public async create(request: CreateMessageRequest): Promise<Message> {
    return await this.postForm('/message', request);
  }
  
  public async update(request: UpdateMessageRequest) {
    return await this.putForm('/message', request);
  }
}
