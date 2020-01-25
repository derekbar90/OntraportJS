import { AxiosInstance } from 'axios';
import { HttpClient } from '../http';
import { Contact } from '../types/contact';
import { ObjectType } from '../types/object';
import { OntraportJS } from '../main';

export class Contacts extends HttpClient {  
  context: OntraportJS = null; 
  
  constructor(axios: AxiosInstance, context: OntraportJS) {
    super(axios);
    context = context;
  }

  public async createContact(contact: Contact, tags?: String[]) {
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
  
  // public async findContact(request: FindContactRequest) {
  //   const response = await this.get('/Contacts', contact);

  //   if (tags) {
  //     try {
  //       await OntraportJS.objects.addTagByName({
  //         objectID: ObjectType.CONTACT,
  //         ids: [response.id],
  //         add_names: tags
  //       })
  //     } catch (e) {
  //       console.log(`Contact created but the tags were not applied to the follow contact: ${response.id}`)
  //       throw e;
  //     }
  //   }

  //   return response;
  // }
}
