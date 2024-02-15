import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import "./index.css";

const initialExpenses = [
  { id: 1, title: "Milk", amount: 5, category: "Groceries" },
  { id: 2, title: "Eggs", amount: 10, category: "Groceries" },
  { id: 3, title: "Electricity", amount: 100, category: "Utilities" },
  { id: 4, title: "Elden Ring", amount: 30, category: "Entertainment" },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [filterExpenses, setFilterExpenses] = useState(initialExpenses);

  const handleDelete = (id: number) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    setFilterExpenses(updatedExpenses);
  };

  const handleSelect = (category: string) => {
    if (category === "All Category") {
      setFilterExpenses(expenses);
      return;
    }
    setFilterExpenses(
      expenses.filter((expense) => expense.category === category)
    );
  };

  return (
    <>
      <ExpenseFilter
        onSelect={handleSelect}
        categories={[...new Set(expenses.map((expense) => expense.category))]}
      />
      <ExpenseList expenses={filterExpenses} onDelete={handleDelete} />;
    </>
  );
}

export default App;
