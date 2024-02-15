import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import categories from "./categories";

const initialExpenses = [
  { id: 1, title: "Milk", amount: 5, category: "Groceries" },
  { id: 2, title: "Eggs", amount: 10, category: "Groceries" },
  { id: 3, title: "Electricity", amount: 100, category: "Utilities" },
  { id: 4, title: "Elden Ring", amount: 30, category: "Entertainment" },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [categories, setCatogories] = useState([
  //   ...new Set(expenses.map((expense) => expense.category)),
  // ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </>
  );
}

export default App;
