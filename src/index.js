const axios = require('axios').default;
const baseURL = 'https://viacep.com.br/ws/';

function getCepInJson(value){
    return axios.get(baseURL.concat(cep, '/json'));
}

function getCepInXml(value){
    return axios.get(baseURL.concat(value, '/xml'));
}

module.exports = {
    getCepInJson,
    getCepInXml
}