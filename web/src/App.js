import React, { useState, useEffect } from 'react';
import api from './services/api';

// 3 conceitos que definem React. Se vc domina eles, vc pode dizer que domina React!
// Componente = Uma funcao que retorna algum conteudo html, css ou js para interface. Deve ser um bloco isolado, com esses conteudos, que n interfira no restante da aplicacao.
// Propriedade = Informacoes quem um componente pai passa para um componente filho.
// Estado = Informacoes mantidas e manipuladas pelo componente (lembrar: imutabilidade).

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}          
        </ul>
      </main>
    </div>
  );
}

export default App;
