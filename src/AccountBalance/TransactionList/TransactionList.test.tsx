import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionList from './TransactionList';
import { Transaction } from 'Store';




const createTransactionList = ():Transaction[] => {
  return [
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
  
}

const renderTransactionsList = (transactions:  Transaction[]) => {
  return render(<TransactionList
    transactions={transactions}
  />)
}

describe('Transaction List', () => {
  test('should render items', () => {
    const transactions = createTransactionList();
    renderTransactionsList(transactions);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3);
    const [dateHeader, amountHeader, descriptionHeader] =  screen.getAllByRole('columnheader');
    expect(dateHeader).toBeInTheDocument();
    expect(amountHeader).toBeInTheDocument();
    expect(descriptionHeader).toBeInTheDocument();
    
    const [
      date, amount, description,
      date2, amount2, description2,
    ] =  screen.getAllByRole('cell');

    expect(new Date(date.textContent || '')).not.toBeNaN();
    expect(amount.textContent).toBe('5000');
    expect(description.textContent).toBe('Deposito inicial');

    expect(new Date(date2.textContent || '')).not.toBeNaN();
    expect(amount2.textContent).toBe('-2000');
    expect(description2.textContent).toBe('Pago para reparar cel');
  })
  test('should render 1 item', () => {
    const transactions = createTransactionList();
    renderTransactionsList(transactions.slice(1));
    expect(screen.getAllByRole('row')).toHaveLength(2);
  })

  test('should render "No hay datos." when there is no item', () => {
    renderTransactionsList([]);
    expect(screen.getAllByRole('row')).toHaveLength(2);
    const tableData = screen.getAllByRole('cell');
    expect(tableData).toHaveLength(1);
    expect(tableData[0]).toHaveTextContent('No hay datos.')
  })
})