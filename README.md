# Just one more POC

Apenas faça o seguinte setup:

- Empacote index + node_modules num `pack.zip`
- Faça Upload no AWS Lambda
- Defina a variável de ambiente `CRYPTO_KEY` no Lambda
- Faça Deploy do AWS Lambda
- Crie um novo `RESOURCE` e novo método `GET` no seu AWS API Gateway
- Defina nessa novo recurso e método o uso do `QUERY PARAM` como `DATA`
- Faça a integração desse método `GET` usando um `Lambda Proxy Integration` apontando para o Lambda acima
- Faça deploy do API GW
- Verifique nas configurações do Gateway as definições de `ENDPOINT` na aba `STAGES`
- Faça seu request apendando o parametro `?data=` + CRYPTO TOKEN

ENJOY!