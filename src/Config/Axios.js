import Axios from 'axios';

const instance = Axios.create({
  baseURL:'https://www.omdbapi.com/'
});

export default instance;