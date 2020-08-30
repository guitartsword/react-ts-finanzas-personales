import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccountBalance from './AccountBalance';
import { StoreProvider } from 'Store';

const createAccountBalance = () => {
  return render(<StoreProvider><AccountBalance/></StoreProvider>);
}

test('create deposit transaction', () => {
  createAccountBalance();
  const depositButton = screen.getByText('Depositar');
  const quantity = screen.getByLabelText('Cantidad');
  expect(quantity.tagName).toBe('INPUT');
  fireEvent.change(quantity, {
    target: {value: '5000'},
  });
  expect(screen.getByText('$0', { exact: false })).toBeInTheDocument();
  depositButton.click();
  expect(screen.getByText('$5000', { exact: false })).toBeInTheDocument();
});


test('create withdraw tranasaction', () => {
  createAccountBalance();
  const depositButton = screen.getByText('Depositar');
  const withdrawButton = screen.getByText('Retirar');
  const quantity = screen.getByLabelText('Cantidad');

  expect(quantity.tagName).toBe('INPUT');
  fireEvent.change(quantity, {
    target: {value: '5000'},
  });
  expect(screen.getByText('$0', { exact: false })).toBeInTheDocument();
  depositButton.click();
  expect(screen.getByText('$5000', { exact: false })).toBeInTheDocument();
  withdrawButton.click();
  expect(screen.getByText('$0', { exact: false })).toBeInTheDocument();
});

test('create deposit and withdraw transaction', () => {
  createAccountBalance();
  const DEPOSIT_AMOUNT = 650;
  const WITHDRAW_AMOUNT = 300;
  const FINAL_BALANCE = DEPOSIT_AMOUNT - WITHDRAW_AMOUNT;

  const depositButton = screen.getByText('Depositar');
  const withdrawButton = screen.getByText('Retirar');
  const quantity = screen.getByLabelText('Cantidad');
  
  
  expect(screen.getByText('$0', { exact: false })).toBeInTheDocument();
  fireEvent.change(quantity, {
    target: {value: DEPOSIT_AMOUNT},
  });
  depositButton.click();
  expect(screen.getByText(`$${DEPOSIT_AMOUNT}`, { exact: false })).toBeInTheDocument();

  fireEvent.change(quantity, {
    target: {value: WITHDRAW_AMOUNT},
  });
  withdrawButton.click();
  expect(screen.getByText(`$${FINAL_BALANCE}`, { exact: false })).toBeInTheDocument();
});