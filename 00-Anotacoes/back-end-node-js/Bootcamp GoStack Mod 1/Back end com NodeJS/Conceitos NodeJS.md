# Conceitos NodeJS

# Arquitetura Event-loop

- Baseado em Eventos (Rotas na maioria das vezes)
- Call Stack

## Node single-thread

- C++ por trás com libuv
- Background threads

## Non-blocking I/O

- Quando fazemos uma requisição para o NodeJS não precisamos retornar todos os dados de uma listagem de uma só vez, podemos retornar em partes.

# Call Stack

- Pilha de funções.. O event Loop  ira "pegar" as funções e irá executar em multi-threads através do C++ PILHA = LAST IN FIRST OUT

![Conceitos%20NodeJS/Untitled.png](Conceitos%20NodeJS/Untitled.png)

# Frameworks

## ExpressJS como base

- Sem opnião
- Ótimo para iniciar (MicroFramework)
- Micro-serviços (Arquitetura onde dividimos nossa aplicação em microserviços)

# Outros Frameworks

- AdonisJS
- NestJS