import React, { useState } from 'react';
import { Transaction } from 'Store';

interface CreateTransactionProps {
  deposit: (transaction: Omit<Transaction, 'createdAt'>) => void;
  withdraw: (transaction: Omit<Transaction, 'createdAt'>) => void;
}

export default function ({ deposit, withdraw }: CreateTransactionProps) {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  return <>
    <div className="field">
      <label className="label">
        Cantidad
        <div className="control">
          <input className="input" type="text" placeholder="Cantidad" onChange={(event) => setAmount(Number(event.target.value))} />
        </div>
      </label>
    </div>
    <div className="field">
      <label className="label">
        Detalle
        <div className="control">
          <input className="input" type="text" placeholder="Detalle" onChange={(event) => setDescription(event.target.value)} />
        </div>
      </label>
    </div>
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link is-danger" onClick={() => withdraw({ amount, description, type: 'WITHDRAW' })}>Retirar</button>
      </div>
      <div className="control">
        <button className="button is-success" onClick={() => deposit({ amount, description, type: 'DEPOSIT' })} >Depositar</button>
      </div>
    </div>
  </>;
}