import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayedForm, setDisplayedForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const displayFormHandler = () => {
    setDisplayedForm(true);
  };

  const hiddingFormHandler = (value) => {
    setDisplayedForm(value);
  };

  return (
    <div className="new-expense">
      {displayedForm === false ? (
        <button onClick={displayFormHandler}>Add Expense</button>
      ) : (
        <ExpenseForm
          onHiddingForm={hiddingFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
