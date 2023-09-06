//import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 24.53,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.99,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car insurance",
      amount: 295.32,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {

  }

  //React code

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expensesList: expenses})
  // );

  //JSX code

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesList={expenses} />
    </div>
  );
}

export default App;
