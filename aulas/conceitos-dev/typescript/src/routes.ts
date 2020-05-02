import { Request, Response } from 'express';
import createUser from './services/CreateUser';


export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Everton',
    email: 'everton@rocketseat.com.br',
    password: '123456',
    techs: [
      'Node',
      'React',
      'ReactNative',
      { title: 'Javascript', experience: 100 }
    ]
  });
  return response.json({ message: helloWorld });
}