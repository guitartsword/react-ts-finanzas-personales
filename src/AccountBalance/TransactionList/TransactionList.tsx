import React from 'react';
import { Transaction } from 'Store';

export default function({transactions}: {transactions: Transaction[]}) {
  const list = transactions.map(t => <li key={t.createdAt.toISOString()}>
    {t.description }
    Amount: {t.amount*(t.type === 'WITHDRAW'? -1 : 1)}
    Date: {t.createdAt.toISOString()}
  </li>);
  return <ul>
    {list}
  </ul>
}
