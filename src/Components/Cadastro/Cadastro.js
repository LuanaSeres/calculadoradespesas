import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Cadastro.css'


const Cadastro = ({ adicionarReceita, adicionarDespesa }) => {
  const [itemName, setItemName] = useState('');
  const [itemValue, setItemValue] = useState('');
  const [itemType, setItemType] = useState('');
  const [itemPaidBy, setItemPaidBy] = useState('');

  const handleAddItem = () => {
    if (itemType !== 'Receita' && itemType !== 'Despesa') {
      alert("O campo 'Tipo' deve ser 'Receita' ou 'Despesa'");
      return;
    }

    const newItem = {
      id: uuidv4(),
      nome: itemName,
      valor: parseFloat(itemValue),
      tipo: itemType,
      pagoPor: itemPaidBy,
    };

    setItemName('');
    setItemValue('');
    setItemType('');
    setItemPaidBy('');

    if (newItem.tipo === 'Receita') {
      adicionarReceita(newItem);
    } else if (newItem.tipo === 'Despesa') {
      adicionarDespesa(newItem);
    }
  };

  return (
    <div className="cadastro">
      <h2>Cadastro</h2>

      <div className="add-item-form">
        <label>
          Nome:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </label>
        <label>
          Valor:
          <input type="number" value={itemValue} onChange={(e) => setItemValue(e.target.value)} />
        </label>
        <label>
          Tipo:
          <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Receita">Receita</option>
            <option value="Despesa">Despesa</option>
          </select>
        </label>
        <label>
          Pago por:
          <input type="text" value={itemPaidBy} onChange={(e) => setItemPaidBy(e.target.value)} />
        </label>
      </div>
      <div className='Button'>
        <button onClick={handleAddItem}>Adicionar Item</button>
      </div>
    </div>
  );
};

export default Cadastro