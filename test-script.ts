import {OntraportJS} from './src/main';
import { Contact } from './src/types/contact';
import { ObjectType } from './src/types/object';
import { NoteType } from './src/types/note';

new OntraportJS({
  apiAppId: "####################",
  apiSecret: "####################",
})

const run = async () => {

  const testUser = {
    email: 'derekbarrera@gmail.com'
  }

  const resp = await OntraportJS.contacts.find({
    search: testUser.email,
  });

  let contact: Contact;
  const tags = ['test_api_contact'];
  const altTags = ['test_api_contact_alt'];

  console.log('resp', resp);

  if(resp.length == 0){
    contact = await OntraportJS.contacts.create({
      firstname: 'Foo',
      lastname: 'Test',
      email: testUser.email
    }, tags);
  } else {
    contact = resp[0];
    await OntraportJS.objects.addTagByName({
      objectID: ObjectType.CONTACT,
      ids: [contact.id],
      add_names: altTags
    })
  }

  await OntraportJS.contacts.update({
    email: testUser.email,
    id: contact.id,
    firstname: "Geroge"
  })

  const message = {
    subject: 'This is the subject',
    body: 'This is the body'
  }

  OntraportJS.notes.create({
    object_type_id: ObjectType.CONTACT,
    type: NoteType.Form,
    contact_id: contact.id,
    data: `Subject: ${message.subject}\n\nBody: ${message.body}`
  })

}

run();