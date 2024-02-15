import Expense from "./Expense";

interface Props {
  expenses: { id: number; title: string; amount: number; category: string }[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  return (
    <table className="table table-bordered table-responsive ">
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          category={expense.category}
          onDelete={onDelete}
        />
      ))}
      <tfoot>
        <tr>
          <td>Total: </td>
          <td>${totalAmount}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
