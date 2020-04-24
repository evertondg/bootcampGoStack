# Conceitos API REST

# Fluxo de requisição e respostas

- Requisição é feita por um cliente
- Resposta retornada através de uma estrutura de dados;
- Cliente recebe resposta e processa resultado.

## Rotas utilizam os métodos HTTP:

- **GET**

    http://minhaapi.com/users

- **POST**

    http://minhaapi.com/users

- **PUT**

    http://minhaapi.com/users/1

- **DELETE**

    http://minhaapi.com/users/1

## Benefícios

- Múltiplos front-end e apenas um back-end
- Protocolo de comunicação padronizada
    - Mesma estrutura para web / mobile / API pública
- Comunicação com serviços externos

## JSON

- Javascript Object Notation

```jsx
{
	"user":{
		"name": "Everton",
		"email": "evertondg@hotmail.com.br",
		"skills": ["JS","NodeJS","ReactJS", "ReactNative"]
	}
}
```

## Conteúdo da requisição

![Conceitos%20API%20REST/Untitled.png](Conceitos%20API%20REST/Untitled.png)

# HTTP codes

- **1xx**: Informational - quase nunca utilizamos
- **2xx**: Success
    - 200: Sucess
    - 201: Created
- **3xx**: Redirection
    - 301: Moved Permanently
    - 302: Moved
- **4xx**: Client Error
    - 400: Bad Request
    - 401: Unauthorized
    - 404: Not Found
- **5xx**: Server Error
    - 500: Internal Error