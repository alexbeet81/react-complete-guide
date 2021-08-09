import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setEnteredYear] = useState("2020");

  const filterChangeHander = (selectedYear) => {
    setEnteredYear(selectedYear);
    // console.log("Expenses.js");
    // console.log(selectedYear);
    // only show expense items that match this year.
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHander}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
