import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TotalBalance from './TotalBalance';

test('show amount', () => {
  const rendered = render(<TotalBalance balance={5000} />);
  expect(screen.getByText('$5000', { exact: false })).toBeInTheDocument();
});


// test('create withdraw tranasaction', () => {
//   const rendered = render(<TotalBalance />);
//   const depositButton = screen.getByText('Depositar');
//   const withdrawButton = screen.getByText('Retirar');
//   const quantity = screen.getByLabelText('Cantidad');

//   expect(quantity.tagName).toBe('INPUT');
//   fireEvent.change(quantity, {
//     target: {value: '5000'},
//   });
//   expect(screen.getByText('$0', { exact: false })).toBeInTheDocument();
//   depositButton.click();
//   expect(screen.getByText('$5000', { exact: false })).toBeInTheDocument();
//   withdrawButton.click();
//   expect(screen.getByText('$0', { exact: false })).toBeInTheDocument();
// });

// test('create deposit and withdraw tranasaction', () => {
//   render(<TotalBalance />);
//   const DEPOSIT_AMOUNT = 650;
//   const WITHDRAW_AMOUNT = 300;
//   const FINAL_BALANCE = DEPOSIT_AMOUNT - WITHDRAW_AMOUNT;

//   const depositButton = screen.getByText('Depositar');
//   const withdrawButton = screen.getByText('Retirar');
//   const quantity = screen.getByLabelText('Cantidad');
  
  
//   expect(screen.getByText('$0', { exact: false })).toBeInTheDocument();
//   fireEvent.change(quantity, {
//     target: {value: DEPOSIT_AMOUNT},
//   });
//   depositButton.click();
//   expect(screen.getByText(`$${DEPOSIT_AMOUNT}`, { exact: false })).toBeInTheDocument();

//   fireEvent.change(quantity, {
//     target: {value: WITHDRAW_AMOUNT},
//   });
//   withdrawButton.click();
//   expect(screen.getByText(`$${FINAL_BALANCE}`, { exact: false })).toBeInTheDocument();
// });