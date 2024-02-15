interface Props {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ categories, onSelectCategory }: Props) => {
  return (
    <select
      className="form-select my-3"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
