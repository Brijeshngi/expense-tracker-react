import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";


const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction, index) => (<Transaction key={transaction.index} transaction={transaction}/>))}
      </ul>
    </div>
  );
};

export default TransactionList;
