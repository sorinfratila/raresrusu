import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://raresrusu.com/wp-json/wp/v2',
});

export default instance;
