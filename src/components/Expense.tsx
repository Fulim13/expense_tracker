interface Props {
  id: number;
  title: string;
  amount: number;
  category: string;
  onDelete: (id: number) => void;
}

const Expense = ({ id, title, amount, category, onDelete }: Props) => {
  return (
    <tbody>
      <tr>
        <td>{title}</td>
        <td>${amount}</td>
        <td>{category}</td>
        <td>
          <button className="btn btn-danger" onClick={() => onDelete(id)}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Expense;
