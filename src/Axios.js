import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-kl.firebaseio.com'
});

export default instance