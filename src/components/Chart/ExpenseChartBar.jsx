import React from "react";
import "./ExpenseChartBar.css";

const ExpenseChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className="expenseChart-bar">
      <div className="expenseChart-bar__inner">
        <div
          className="expenseChart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="expenseChart-bar__label">{label}</div>
    </div>
  );
};

export default ExpenseChartBar;
