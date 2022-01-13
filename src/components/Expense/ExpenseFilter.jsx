import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ data, select, onChagneFilter }) => {
  const dropDownChangeHandler = (e) => {
    const selected = e.target.value;
    onChagneFilter(selected);
  };
  const date = data.map((info) => {
    return info.date.getFullYear();
  });
  const max = Math.max.apply(null, date);
  const min = Math.min.apply(null, date);

  let yearList = [];
  for (let i = min; i <= max; i++) {
    yearList[i] = [i];
  }

  const resultYear = yearList
    .slice(0)
    .reverse()
    .map((year) => {
      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    });

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter bt year</label>
        <select value={select} onChange={dropDownChangeHandler}>
          <option value="ALL">ALL</option>
          {resultYear}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
