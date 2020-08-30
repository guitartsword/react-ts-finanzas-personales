import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionList from './TransactionList';
import { Transaction } from 'Store';

const createTransactionList = () => {
  const transactions:Transaction[] = [
    {
      amount: 5000,
      createdAt: new Date(),
      type: 'DEPOSIT',
      description: 'Deposito inicial'
    },
    {
      amount: 2000,
      createdAt: new Date('2020-08-30T06:00:00.000Z'),
      type: 'WITHDRAW',
      description: 'Pago para reparar cel'
    }
  ]
  return render(<TransactionList
    transactions={transactions}
  />)
}
describe('Transaction List', () => {
  test('should render items', () => {
    createTransactionList();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  })
})