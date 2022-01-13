import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onCancel, onSaveExpenseData }) => {
  const [inputs, setInputs] = useState({
    title: "",
    amount: 0.01,
    date: "",
  });

  const { title, amount, date } = inputs;

  const inputsChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    if (!title || !amount || !date) {
      e.preventDefault();
    } else {
      e.preventDefault();
      const userData = { title, amount, date: new Date(date) };
      onSaveExpenseData(userData);
      setInputs({ title: "", amount: 0.01, date: "" });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={inputsChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            type="number"
            value={amount}
            step="0.01"
            onChange={inputsChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            type="date"
            value={date}
            onChange={inputsChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
