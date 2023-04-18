# API Node.js com Serverless Framework na AWS

Este é um projeto de uma API Node.js utilizando o Serverless Framework na AWS. Ele utiliza uma estrutura de serviços AWS, com a seguinte ordem:

![Add a subheading 1](https://user-images.githubusercontent.com/54821438/232647454-4d91cf71-78f4-4811-a36e-9f96442025a5.png)


O objetivo do projeto é oferecer quatro funções Lambda: `fetchItem, fetchItems, updateItem e insertItem`.

## Pré-requisitos
Antes de começar, é necessário ter o `Node.js` instalado e uma `conta na AWS`. É necessário também configurar suas credenciais da AWS para utilizar o `AWS CLI`.

As seguintes dependências precisam ser instaladas:

serverless
uuid
aws-sdk

## Funções Lambda
As quatro funções Lambda criadas são:

* fetchItem
* fetchItems
* updateItem
* insertItem

## Como utilizar?
Para utilizar, é necessário alterar a variável Resource no arquivo serverless.yml para o ARN do DynamoDB que você criou.

Em seguida, basta rodar o comando:

```bash
serverless deploy
```

## Próximos passos
Os próximos passos incluem a interação com banco de dados RDS, autenticação com AWS Cognito e upload de arquivos com o AWS S3.