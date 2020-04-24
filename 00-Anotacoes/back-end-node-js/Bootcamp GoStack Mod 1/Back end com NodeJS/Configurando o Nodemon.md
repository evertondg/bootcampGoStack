# Configurando o Nodemon

Por padrão qualquer alteração no código feita com NodeJS não reflete automaticamente no navegador. É necessário parar a execução na linha de comando (CTRL+C) e rodar o arquivo novamente. 

Para evitar este trabalho iremos utilizar o [Nodemon](https://www.npmjs.com/package/nodemon).

Para isto utilize o seguinte comando em seu terminal, na pasta de seu projeto:

```bash
yarn add nodemon -D
```

Utilizar o -D no momento de adicionar o Nodemon como dependência de desenvolvedor. Aguarde a instalação.

- Método 1 para usar o nodemon:
    - Vá até o terminal e execute seu arquivo da seguinte forma

    ```bash
    yarn nodemon src/index.js
    ```

Para facilitar, iremos personalizar os scripts via **package.json,** da seguinte forma 

- package.json:

```jsx
{
  "name": "backend",
  "version": "1.0.0",
  "main": "src/index.js", //Corigimos o caminho para executar o arquivo principal
  "license": "MIT",
  "scripts": {
    "dev": "nodemon" //Definimos que ao rodar dev o nodemon irá executar o "main"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.3"
  }
}
```

Desta forma ao rodar o comando abaixo, a aplicação será executada com o Nodemon e qualquer alteração no código fará o live reload no navegador:

```bash
yarn dev
```

Podemos melhorar o retorno da execução desta aplicação adicionando uma função que ao iniciar o arquivo, irá informar que o servidor foi iniciado. 

Fazemos isto alterando o app.listen() como vemos abaixo:

```bash
app.listen(3333, () => {
  console.log('📌 Back-end started!')
});
```

A ArrowFunction já retorna o console.log() informando que tudo está rodando. Ao salvar o Nodemon entra em ação e atualiza todo código no navegador. 

### 🙃 DICAS:

Para abrir o teclado de emojis no linux aperte CTRL - SHIFT - E então aperte a barra de espaços para abrir o menu e selecionar o emoticon! 🙃