import {OntraportJS} from './main';

new OntraportJS({
  apiAppId: "##################",
  apiSecret: "#################",
})

const run = async () => {
  const response = await OntraportJS.contacts.createContact({
    firstname: 'Foo',
    lastname: 'Test',
    email: 'footest@gmail.com'
  }, ['api_contact']);

  response;
}

run();