import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/2487230?s=460&u=55e988a5c39e6437c6e292c38685b8ef5f11f032&v=4"
            alt="Everton De Grande"
          />
          <div>
            <strong>evertondg/doom-fire-algorithm</strong>
            <p>Desenvolvimento do algoritmo do fogo estilo "DooM"</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/2487230?s=460&u=55e988a5c39e6437c6e292c38685b8ef5f11f032&v=4"
            alt="Everton De Grande"
          />
          <div>
            <strong>evertondg/doom-fire-algorithm</strong>
            <p>Desenvolvimento do algoritmo do fogo estilo "DooM"</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/2487230?s=460&u=55e988a5c39e6437c6e292c38685b8ef5f11f032&v=4"
            alt="Everton De Grande"
          />
          <div>
            <strong>evertondg/doom-fire-algorithm</strong>
            <p>Desenvolvimento do algoritmo do fogo estilo "DooM"</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
