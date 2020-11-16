import axios, { AxiosResponse } from 'axios'

interface IAPI {
    readonly baseURL: String
    build(cep: string, type: string): Promise<AxiosResponse<any>>
}

export class API implements IAPI {
    baseURL = 'https://viacep.com.br/ws/'

    build = (cep='', type='') => {
        const url = type.search('json') != -1 ? cep.concat('/json') : cep.concat('/xml')
        return axios.get(this.baseURL + url)
    }
}