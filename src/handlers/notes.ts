import { AxiosInstance } from 'axios';
import { HttpClient } from '../http';
import { CreateNoteRequest, Note } from '../types/note';

export class Notes extends HttpClient {  
  constructor(axios: AxiosInstance) {
    super(axios);
  }

  public async create(request: CreateNoteRequest): Promise<Note> {
    return await this.postForm('/Notes', request);
  }
}
