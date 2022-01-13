import React, { useState } from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DummyData = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Jet Kick", amount: 403.67, date: new Date(2020, 8, 3) },
    { title: "Null Point", amount: 404.67, date: new Date(2002, 1, 9) },
    { title: "LoL", amount: 1818.67, date: new Date(1989, 6, 24) },
    { title: "1lonmusk", amount: 1234.67, date: new Date(2014, 3, 22) },
  ];
  const [expenses, setExpenses] = useState(DummyData);

  const addExpenseHandler = (expense) => {
    setExpenses(expenses.concat(expense));
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense data={expenses} />
    </div>
  );
};

export default App;
