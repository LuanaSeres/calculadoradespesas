import React from 'react';
import './Receita.css'

const Receitas = ({ receitas, itensReceitas }) => {
  return (
    <div className="receitas-component">
      <h2>Receitas</h2>
      <ul>
        {itensReceitas.map((item) => (
          <li key={item.id}>{`${item.nome}: R$ ${item.valor.toFixed(2)}`}</li>
        ))}
      </ul>
      <p>Total Recebido: R$ {receitas.toFixed(2)}</p>
    </div>
  );
};

export default Receitas;