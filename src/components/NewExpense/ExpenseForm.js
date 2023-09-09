import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Alternative useState
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    //Alternative useState
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //Better (safer) alternative way of useState
    // useUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    // useUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);

    // useUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  //Another alternative way to use useState
  // const inputChangeHandler = (indentifier, value) => {
  //   if(indentifier === 'title'){
  //     setEnteredTitle(value);
  //   } else if (indentifier === 'date'){
  //     setEnteredDate(value);
  //   } else {
  //     amountChangeHandler(value);
  //   }
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </label>
          <label>
            Amount
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </label>
          <label>
            Date
            <input
              type="date"
              min="2020-01-01"
              max="2024-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onHiddingForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
