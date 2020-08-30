import React, { useContext } from 'react';
import TotalBalance from './TotalBalance/TotalBalance';
import TransactionList from './TransactionList/TransactionList';
import CreateTransaction from './CreateTransaction/CreateTransaction';
import { Transaction, Store } from 'Store';

export default function () {
  const { state, dispatch } = useContext(Store);
  const createTransaction = (transaction: Omit<Transaction, 'createdAt'>) => {
    dispatch({
      payload: {
        ...transaction,
        createdAt: new Date(),
      },
      type: transaction.type,
    });
  };
  return <>
    <TotalBalance balance={state.accountBalance} />
    <TransactionList transactions={state.transactions} />
    <CreateTransaction deposit={createTransaction} withdraw={createTransaction} />
  </>
}   