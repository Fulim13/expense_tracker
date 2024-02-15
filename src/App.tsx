import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const initialExpenses = [
  { id: 1, title: "Milk", amount: 5, category: "Groceries" },
  { id: 2, title: "Eggs", amount: 10, category: "Groceries" },
  { id: 3, title: "Electricity", amount: 100, category: "Utilities" },
  { id: 4, title: "Elden Ring", amount: 30, category: "Entertainment" },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return <ExpenseList expenses={expenses} onDelete={handleDelete} />;
}

export default App;
