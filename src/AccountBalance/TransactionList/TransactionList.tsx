import React from 'react';
import './TransactionList.scss';
import { Transaction } from 'Store';

export default function({transactions}: {transactions: Transaction[]}) {
  const list = transactions.map(t => <tr key={t.createdAt.toISOString()}>
    <td>{t.createdAt.toLocaleString()}</td>
    <td>{t.amount*(t.type === 'WITHDRAW'? -1 : 1)}</td>
    <td>{t.description }</td>
  </tr>);
  return <div className="table-container">
      <table className="table is-fullwidth is-bordered">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Cantidad</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {list.length > 0 ? list : <tr><td colSpan={3}>No hay datos.</td></tr>}
      </tbody>
    </table>
  </div>
}
