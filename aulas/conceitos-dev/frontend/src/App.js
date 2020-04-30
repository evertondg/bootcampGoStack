import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header'

function App() {
  // Inicializamos o useState do projects com um array vazio
  // para receber os objetos da chamada da API via AXIOS
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    })
  }, []);



  async function handleAddProject() {

    const response = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Everton De Grande"
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />
      <hr />

      <ul>
        {projects.map((project, index) => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}> Adicionar Projeto</button>


    </>
  )
}

export default App;