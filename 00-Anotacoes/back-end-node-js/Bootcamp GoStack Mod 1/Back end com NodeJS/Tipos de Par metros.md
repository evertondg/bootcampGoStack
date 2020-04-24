# Tipos de Parâmetros

Parâmetros são formas que o cliente tem de enviar informação para nosso back-end. 

## Query Params

Usados principalmente para filtros e paginação

No Insomnia podemos testar utilizando a aba Query  e utilizar

Para capturar os query params via Node fazemos o seguinte :

```jsx
app.get('/projects', (request, response) => {
// usamos a desestruturação da variável request.query pegando os parametros enviados
  const { title, owner } = request.query; 

  return response.json([
    title,
    owner
  ]);
});
```

![Tipos%20de%20Par%20metros/Untitled.png](Tipos%20de%20Par%20metros/Untitled.png)

## Route Params

Utilizaremos para identificar Recursos na hora de atualizar ou deletar.

São os parâmetros enviados pela rota   como mostra o exemplo abaixo :

```jsx
app.put('/projects/:id', (request, response) => {
  const params = request.params;
  // podemos também fazer a desestruturação
  const {id} = request.params;
	console.log(id)

  return response.json({
    params
  });
});
```

![Tipos%20de%20Par%20metros/Untitled%201.png](Tipos%20de%20Par%20metros/Untitled%201.png)

## Request Body

Conteúdo  na hora de criar ou editar um recurso:

**ATENÇÃO**: Por padrão o EXPRESS não entende o JSON enviado e para que o JSON possa ser entendido pelo Framework devemos acrescentar a linha abaixo a nosso código:

```jsx
const express = require('express');
const app = express();

//acrescente esta linha para o express começar entender JSON
app.use(express.json())
...
```

Este código deve vir antes de criar nossas rotas, pois o NodeJS funciona de forma linear. 

Essa estrutura é enviado via JSON da seguinte forma:

![Tipos%20de%20Par%20metros/Untitled%202.png](Tipos%20de%20Par%20metros/Untitled%202.png)

```jsx
app.post('/projects', (request, response) => {
  const body = request.body;
  response.json(
    body
  )
});
```