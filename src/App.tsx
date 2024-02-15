import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const initialExpenses = [
  { id: 1, title: "Milk", amount: 5, category: "Groceries" },
  { id: 2, title: "Eggs", amount: 10, category: "Groceries" },
  { id: 3, title: "Electricity", amount: 100, category: "Utilities" },
  { id: 4, title: "Elden Ring", amount: 30, category: "Entertainment" },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [filterExpenses, setFilterExpenses] = useState(initialExpenses);
  const categories = [...new Set(expenses.map((expense) => expense.category))];

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

  const handleSubmit = (title: string, amount: number, category: string) => {
    const newID = expenses.length + 1;
    setExpenses([
      ...expenses,
      { id: newID, title: title, amount: amount, category: category },
    ]);
    setFilterExpenses([
      ...expenses,
      { id: newID, title: title, amount: amount, category: category },
    ]);
  };

  return (
    <>
      <ExpenseForm categories={categories} onSubmit={handleSubmit} />
      <ExpenseFilter onSelect={handleSelect} categories={categories} />
      <ExpenseList expenses={filterExpenses} onDelete={handleDelete} />
    </>
  );
}

export default App;
