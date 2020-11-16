Trata-se de uma lib para consulta  de CEP através do viaCEP.
Basicamente o dev passa o cep de um lugar e a lib retorna um json com as informações sobre ele, exemplos abaixo:
JSON
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "unidade": "",
  "ibge": "3550308",
  "gia": "1004"
}

A base da lib se baseia no Axios que está nas dependências.

Modo de usar:
- Instale a lib no seu projeto
    npm i easy-cep ou
    yarn add easy-cep

- Importe a lib no seu projeto
    const easyCep = require('easy-cep'); //com JS
    import easyCep from 'easy-cep' //com TS

- Chame as funções como Promises
    easy_cep.getCepInJson('01001000').then((response) => {console.log(response.data)});

