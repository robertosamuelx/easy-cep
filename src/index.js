const baseURL = 'https://viacep.com.br/ws/';
const axios = require('axios').default;

module.exports = {
    async getCepInJson(value){
        const promise = await axios.get(baseURL.concat(value, '/json'));
        return JSON.stringify(promise.data);
    }
}