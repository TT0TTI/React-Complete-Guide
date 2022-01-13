import React from "react";
import ExpenseChartBar from "./ExpenseChartBar";
import "./ExpenseChart.css";

const ExpenseChart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  const resultChart = dataPoints.map((dataPoint) => {
    return (
      <ExpenseChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
      />
    );
  });
  return <div className="expenseChart">{resultChart}</div>;
};

export default ExpenseChart;
