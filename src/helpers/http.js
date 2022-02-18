import {default as axios} from 'axios';

// import {APP_PORT, APP_KEY} from '@env';
const APP_PORT = 'http://192.168.1.39:8080';
console.log('awppawpaw', APP_PORT);

const http = (token = null) => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: APP_PORT,
    headers,
  });
};

export default http;
