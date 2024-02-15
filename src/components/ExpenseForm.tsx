import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be at least 3 characters." }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .positive({ message: "Amount must be greater than 0" }),
  category: z.string().min(3, { message: "Category is required" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  categories: string[];
  onSubmit: (title: string, amount: number, category: string) => void;
}

const ExpenseForm = ({ categories, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      action=""
      className="mb3"
      onSubmit={handleSubmit((data) =>
        onSubmit(data.title, data.amount, data.category)
      )}
    >
      <label htmlFor="title" className="form-label">
        Title
      </label>
      <input
        {...register("title")}
        id="title"
        type="text"
        className="form-control mb-3"
      />
      {errors.title && <p className="text-danger">{errors.title.message}</p>}

      <label htmlFor="amount" className="form-label">
        Amount
      </label>
      <input
        {...register("amount", { valueAsNumber: true })}
        id="amount"
        type="number"
        className="form-control mb-3"
      />
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}

      <label htmlFor="category" className="form-label">
        Category
      </label>
      <select
        {...register("category")}
        name="category"
        id="category"
        className="form-select"
        defaultValue=""
      >
        <option></option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      {errors.category && (
        <p className="text-danger">{errors.category.message}</p>
      )}

      <button
        disabled={!isValid}
        type="submit"
        className="btn btn-primary mt-3"
      >
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
