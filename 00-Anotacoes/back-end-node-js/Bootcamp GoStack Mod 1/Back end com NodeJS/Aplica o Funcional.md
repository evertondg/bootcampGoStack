# Aplicação Funcional

## Plugins:

- **uuidv4**:  yarn add uuidv4 (Gera id's randomicos)
    - Para utilizar no nodeJS adicione o código abaixo a sua navegação

    ```jsx
    const {uuid} = require('uuidv4');
    ...

    ```

## Dicas

Sempre retorne o status no response de sua rota com response.status().json({message : "TESTE"})

Código  de nosso primeiro aplicativo de com rotas funcionando:

```jsx
const express = require('express');
const { uuid } = require('uuidv4');
const app = express();

// Express needs this line to work with JSON
app.use(express.json())

const projects = [

]

app.get('/projects', (request, response) => {
  const { title } = request.query;

  // title filter by query param 
  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return response.json(results);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = {
    id: uuid(),
    title,
    owner
  }

  projects.push(project);

  response.json(project);

});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    // Informe sempre o status da requisição com o .status(xxx)
    response.status(400).json({ error: "Project Not Found" });
  }

  const project = {
    id,
    title,
    owner
  }

  projects[projectIndex] = project;

  response.json(project)

});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);
  if (projectIndex < 0) {
    // Always report the status of request using .status(xxx)
    response.status(400).json({ error: "Project Not Found" });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();

});

app.listen(3333, () => {
  console.log('📌 Back-end started!')
});
```