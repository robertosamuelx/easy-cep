Este projeto é minha primeira library no NPM.
Trata de uma lib para consulta  de CEP através do viaCEP.
Basicamente o dev passa o cep de um lugar e a lib retorna um json ou xml (o dev escolhe) com as informações sobre ele, exemplos abaixo:
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

XML
<xmlcep>
    <cep>01001-000</cep>
    <logradouro>Praça da Sé</logradouro>
    <complemento>lado ímpar</complemento>
    <bairro>Sé</bairro>
    <localidade>São Paulo</localidade>
    <uf>SP</uf>
    <unidade/>
    <ibge>3550308</ibge>
    <gia>1004</gia>
</xmlcep>

A base da lib se baseia no Axios que está nas dependências.

Modo de usar:
- Instale a lib no seu projeto
    npm install easy-cep

- Importe a lib no seu projeto
    const easy-cep = require('easy-cep');

- Chame as funções como Promises
    easy_cep.getCepInJson('01001000').then((response) => {console.log(response.data);});

