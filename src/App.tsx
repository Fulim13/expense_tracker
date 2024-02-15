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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCatogories] = useState([
    ...new Set(expenses.map((expense) => expense.category)),
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleSubmit = (title: string, amount: number, category: string) => {
    const newID = expenses.length + 1;
    setExpenses([
      ...expenses,
      { id: newID, title: title, amount: amount, category: category },
    ]);
  };

  return (
    <>
      <ExpenseForm categories={categories} onSubmit={handleSubmit} />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
        categories={categories}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </>
  );
}

export default App;
