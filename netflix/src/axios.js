import axios from 'axios';
import {baseUrls} from './constents/constents';

const instance = axios.create({
    baseURL:baseUrls
});

export default instance