import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg'

import Header from './components/Header'

function App() {

  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {

    // Respeitamos o conceito de imutabilidade
    const newProjects = [...projects, `Novo projeto ${Date.now()}`];

    // Chamamos setProjects com o novo valor 
    setProjects(newProjects);
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />
      <hr />
      <img width={250} src={backgroundImage} />
      <ul>
        {projects.map((project, index) => <li key={index}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}> Adicionar Projeto</button>


    </>
  )
}

export default App;