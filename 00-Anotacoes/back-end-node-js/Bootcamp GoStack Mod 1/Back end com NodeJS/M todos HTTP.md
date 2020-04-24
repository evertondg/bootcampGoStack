# Métodos HTTP

Quando vamos desenvolver uma API devemos utilizar os verbos http:// corretos para cada operação:

## GET

Buscar informações do back-end

```jsx
app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2'
  ]);
});
```

## POST

Criar uma informação no back-end

```jsx
app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ])
});
```

## PUT/PATCH

Servem para alteração no back-end

Put vai servir para atualizar todo os dados de um recurso

Patch quando vamos atualizar apenas um item de nosso registro

```jsx
app.put('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3'
  ])
});
```

## DELETE

Deletar uma informação no back-end

```jsx
app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3'
  ])
});
```