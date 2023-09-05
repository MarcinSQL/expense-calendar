import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title
            <input type="text"></input>
          </label>
          <label>
            Amount
            <input type="number" min="0.01" step="0.01"></input>
          </label>
          <label>
            Date
            <input type="date" min="2020-01-01" max="2024-12-31"></input>
          </label>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
