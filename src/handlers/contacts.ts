import { AxiosInstance } from 'axios';
import { HttpClient } from '../http';
import { Contact, FindContactRequest } from '../types/contact';
import { ObjectType } from '../types/object';
import { OntraportJS } from '../main';

export class Contacts extends HttpClient {    
  constructor(axios: AxiosInstance) {
    super(axios);
  }

  public async create(contact: Contact, tags?: String[]): Promise<Contact> {
    const response = await this.post('/Contacts', contact);

    if (tags) {
      try {
        await OntraportJS.objects.addTagByName({
          objectID: ObjectType.CONTACT,
          ids: [response.id],
          add_names: tags
        })
      } catch (e) {
        console.log(`Contact created but the tags were not applied to the follow contact: ${response.id}`)
        throw e;
      }
    }

    return response;
  }

  public async update(contact: Contact): Promise<Contact> {
    const response = await this.put('/Contacts', contact);
    return response;
  }
  
  public async find(request: FindContactRequest): Promise<Contact[]> {
    const response = await this.get('/Contacts', {
      ...request,
      ids: request.ids ? request.ids.join('') : null,
      listFields: request.listFields ? request.listFields.join('') : null,
      externs: request.externs ? request.externs.join('') : null,
    });
    return response;
  }
}
