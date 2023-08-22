import axios from 'axios';

// Create an instance of Axios with a base URL
const instance = axios.create({
  baseURL: '/api', // Set your base URL here
});

export default instance;
