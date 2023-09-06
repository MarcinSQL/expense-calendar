import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2023");

  const changeYearHandler = (enteredYear) => {
    setEnteredYear(enteredYear);
  } 

  return (
      <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onChangeYear={changeYearHandler} />
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
