import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.128.1:5000/api', // Replace with your base URL
});

export default instance;
