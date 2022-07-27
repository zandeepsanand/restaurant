import axios from 'axios';
import {Base_Url} from './constance';


const instance = axios.create({
    baseURL: Base_Url,
    
  });

  export default instance;