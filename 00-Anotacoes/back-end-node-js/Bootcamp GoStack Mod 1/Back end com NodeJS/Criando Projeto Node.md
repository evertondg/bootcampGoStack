# Criando Projeto Node

Para começar o projeto crie uma pasta vazia e entre nela

```jsx
mkdir backend //Cria pasta
cd backend //Entra na pasta
yarn init -y //Inicia o projeto e pula parte de configurações criando o package.json
code . //Abre o VSCode
```

Criar uma pasta **src,** manteremos todo código desenvolvido dentro desta pasta. Crie um arquivo **index.js.**

### Instalando o ExpressJS

```jsx
yarn add express //Instala as dependências do expressJS
```

### Criando primeira rota com Express

Adicione o conteúdo ao arquivo **src/index.js:**

```jsx
const express = require('express');
const app = express();

app.get('/projects', (request, response) => {
  return response.send('Hello World'); //.send envia algo para quem requisitou
});

app.listen(3333);
```

Abra seu terminal e execute o arquivo da seguinte forma

```bash
node src/index.js
```

Neste momento, acessando o endereço *[http://localhost:3333](http://127.0.0.1:3333/projects)/projects em seu navegador, você terá acesso* a mensagem enviada **(.send())** ao usuário que fez a requisição.

Para retornar dados das API's,  utilizaremos sempre as seguintes estrutra de dados :

```jsx
return response.json([]); //Array de dados
return response.json({}); //Objeto 
```

faça o seguinte retorno de um objeto:

```jsx
return response.json({message: 'Hello World'}); //Objeto 
```