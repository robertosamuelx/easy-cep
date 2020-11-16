import { API } from './api';

const api = new API()

export default {
    async getCepInJson(value: string){
        return await api.build(value, 'json')
    },

    async getCepInXml(value: string){
        return await api.build(value, 'xml')
    }
}