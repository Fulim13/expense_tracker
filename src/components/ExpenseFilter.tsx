import React from "react";

interface Props {
  categories: string[];
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ categories, onSelect }: Props) => {
  return (
    <form>
      <select
        defaultValue="All Category"
        className="form-select my-3"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option>All Category</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </form>
  );
};

export default ExpenseFilter;
