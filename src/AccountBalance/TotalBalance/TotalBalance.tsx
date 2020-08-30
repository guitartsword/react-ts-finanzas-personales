import React, { useState } from 'react';


interface BalanceProps {
  balance: number;
}

export default function ({ balance }: BalanceProps) {
  return <div className="total-balance">
    <p> Saldo en cuenta: ${balance} </p>
  </div>
}