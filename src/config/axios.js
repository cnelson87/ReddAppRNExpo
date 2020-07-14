import axios from 'axios';
import Constants from './Constants';

const { apiBaseUrl } = Constants;

const instance = axios.create({
  baseURL: apiBaseUrl
});

export default instance;
