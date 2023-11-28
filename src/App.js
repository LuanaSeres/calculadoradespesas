import React, { useState } from 'react';
import './App.css';
import Receitas from './Components/Receita/Receita';
import Despesas from './Components/Despesa/Despesa';
import Cadastro from './Components/Cadastro/Cadastro';

const App = () => {
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  const adicionarReceita = (novaReceita) => {
    setReceitas([...receitas, novaReceita]);
  };

  const adicionarDespesa = (novaDespesa) => {
    setDespesas([...despesas, novaDespesa]);
  };

  return (
    <div className="app">
      <Cadastro adicionarReceita={adicionarReceita} adicionarDespesa={adicionarDespesa} />
      <div className='despesas_receitas'>
          <Receitas receitas={receitas.reduce((total, item) => total + item.valor, 0)} itensReceitas={receitas} />
          <Despesas despesas={despesas.reduce((total, item) => total + item.valor, 0)} itensDespesas={despesas} />
      </div>
    </div>
  );
};

export default App;
