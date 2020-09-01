import React, { useContext } from 'react';
import TotalBalance from './TotalBalance/TotalBalance';
import TransactionList from './TransactionList/TransactionList';
import CreateTransaction from './CreateTransaction/CreateTransaction';
import { Transaction, Store } from 'Store';

export default function () {
  const { state, dispatch } = useContext(Store);
  const createTransaction = (transaction: Omit<Transaction, 'createdAt'>) => {
    if (transaction.amount === 0) {
      return;
    }
    dispatch({
      payload: {
        ...transaction,
        createdAt: new Date(),
      },
      type: transaction.type,
    });
  };
  return <div className="container">
    <div className="columns">
      <div className="column is-4">
        <TotalBalance balance={state.accountBalance} />
        <TransactionList transactions={state.transactions} />
      </div>
      <div className="column is-8">
        <CreateTransaction deposit={createTransaction} withdraw={createTransaction} />
      </div>
    </div>
  </div>
}   