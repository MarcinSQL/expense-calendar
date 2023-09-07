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

  const changeYearHandler = (enteredYear) => {
    setEnteredYear(enteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onChangeYear={changeYearHandler} />
      {/* <p>Data for years {filterInfoText} is hidden.</p> */}
      <ExpenseItem
        title={props.expensesList[0].title}
        amount={props.expensesList[0].amount}
        date={props.expensesList[0].date}
      />
      <ExpenseItem
        title={props.expensesList[1].title}
        amount={props.expensesList[1].amount}
        date={props.expensesList[1].date}
      />
      <ExpenseItem
        title={props.expensesList[2].title}
        amount={props.expensesList[2].amount}
        date={props.expensesList[2].date}
      />
      <ExpenseItem
        title={props.expensesList[3].title}
        amount={props.expensesList[3].amount}
        date={props.expensesList[3].date}
      />
    </Card>
  );
}

export default Expenses;
