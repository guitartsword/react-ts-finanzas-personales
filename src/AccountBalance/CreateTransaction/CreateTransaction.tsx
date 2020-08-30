import React, { useState } from 'react';
import { Transaction } from 'Store';

interface CreateTransactionProps {
  deposit: (transaction: Omit<Transaction, 'createdAt'>) => void;
  withdraw: (transaction: Omit<Transaction, 'createdAt'>) => void;
}

export default function( {deposit, withdraw}: CreateTransactionProps ) {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  return <>
    <label>
      Cantidad
      <input type="text" onChange={(event) => setAmount(Number(event.target.value))} />
    </label>
    <label>
      Detalle
      <input type="text" onChange={(event) => setDescription(event.target.value)} />
    </label>

    <button onClick={() => deposit({ amount, description, type: 'DEPOSIT' }) }>Depositar</button>
    <button onClick={() => withdraw({ amount, description, type: 'WITHDRAW' }) }>Retirar</button>
  </>;
}