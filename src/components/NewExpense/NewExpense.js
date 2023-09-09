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

  const displayForm = () => {
    setDisplayedForm(true);
  };

  const hiddingForm = (value) => {
    setDisplayedForm(value);
  };

  return (
    <div className="new-expense">
      {displayedForm === false ? (
        <button onClick={displayForm}>Add Expense</button>
      ) : (
        <ExpenseForm
          onHiddingForm={hiddingForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
