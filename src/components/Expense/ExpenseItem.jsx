import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Expenses from "./Expenses";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, date }) => {
  const [userTitle, setUserTitle] = useState(title);
  const [bool, setBool] = useState(false);

  const clickHandler = () => {
    setBool((bool) => !bool);
    let newTitle = bool ? title : "UpDate!";
    setUserTitle(newTitle);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <Expenses title={userTitle} amount={amount} />
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
