const { google } = require('googleapis');
const keys = require('./keys.json');

const client = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize((error, tokens) => {
  if(error) {
    console.log(error);
    return;
  }
  console.log('connected');
});