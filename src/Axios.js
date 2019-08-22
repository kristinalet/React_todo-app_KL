import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080' //https://react-kl.firebaseio.com'
});

export default instance