import React from 'react';
import './Despesa.css'

const Despesas = ({ despesas, itensDespesas }) => {
  return (
    <div className="despesas-component">
      <h2>Despesas</h2>
      <ul>
        {itensDespesas.map((item) => (
          <li key={item.id}>{`${item.nome}: R$ ${item.valor.toFixed(2)}`}</li>
        ))}
      </ul>
      <p>Total Gasto: R$ {despesas.toFixed(2)}</p>
    </div>
  );
};

export default Despesas