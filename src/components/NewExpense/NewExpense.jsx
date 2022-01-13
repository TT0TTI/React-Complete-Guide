import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    onAddExpense(expenseData);
    stopEditing();
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <Card className="new-expense">
      {isEditing === false ? (
        <button onClick={startEditing}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onCancel={stopEditing}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
