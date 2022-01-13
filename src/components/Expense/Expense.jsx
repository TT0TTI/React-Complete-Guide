import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = ({ data }) => {
  const [filterYear, setFilterYear] = useState("ALL");

  const filterChagneHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const result = data.filter(
    (exense) => exense.date.getFullYear().toString() === filterYear
  );

  const resultYear = filterYear === "ALL" ? data : result;

  return (
    <Card className="expense">
      <ExpenseFilter
        data={data}
        select={filterYear}
        onChagneFilter={filterChagneHandler}
      />
      <ExpensesChart expenses={resultYear} />
      <ExpensesList resultYear={resultYear} />
    </Card>
  );
};

export default Expense;
