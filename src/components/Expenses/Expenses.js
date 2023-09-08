import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2023");

  //Updating using useState
  // let filterInfoText = "2020, 2021, 2022 & 2024";

  // if (enteredYear === "2020") {
  //   filterInfoText = "2021, 2022, 2023 & 2024";
  // } else if (enteredYear === "2021") {
  //   filterInfoText = "2020, 2022, 2023 & 2024";
  // } else if (enteredYear === "2022") {
  //   filterInfoText = "2020, 2021, 2023 & 2024";
  // } else if (enteredYear === "2023") {
  //   filterInfoText = "2020, 2021, 2022 & 2024";
  // } else {
  //   filterInfoText = "2020, 2021, 2022 & 2023";
  // }

  const filteredExpenses = props.expensesList.filter(expense => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  const changeYearHandler = (enteredYear) => {
    setEnteredYear(enteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onChangeYear={changeYearHandler} />
      {/* <p>Data for years {filterInfoText} is hidden.</p> */}
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
