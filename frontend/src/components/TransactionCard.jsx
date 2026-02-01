import React from "react";

export default function TransactionCard({ from, amount, message }) {
  return (
    <div className="card tx-card">
      <div className="tx-top">
        <div className="tx-label">Tx</div>
        <div className="tx-amount">{amount}</div>
      </div>
      <div className="tx-from">{from}</div>
      {message && <div className="tx-message">{message}</div>}
    </div>
  );
}
