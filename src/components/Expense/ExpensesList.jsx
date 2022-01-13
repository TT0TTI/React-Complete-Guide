import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ resultYear }) => {
  const returnList = resultYear.map((exense, key) => {
    const title = exense.title;
    const amount = exense.amount;
    const date = exense.date;
    return <ExpenseItem key={key} title={title} amount={amount} date={date} />;
  });

  return (
    <ul className="expenses-list">
      {resultYear.length === 0 ? (
        <Card className="Null-Expenses">NO Expenses found</Card>
      ) : (
        returnList
      )}
    </ul>
  );
};

export default ExpensesList;
