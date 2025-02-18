import { Expense } from "../types/index";
import AmountDisplay from "./AmountDisplay";
type ExpenseDetailsProps = {
  expense: Expense;
};

export function formatDate(dateStr: string): string {
  const dateObj = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("es-ES", options).format(dateObj);
}

const ExpenseDetails = ({ expense }: ExpenseDetailsProps) => {
  return (
    <div className="bg-white shadow-lg  py-10 rounded-lg border-b border-gray-200 flex gap-5 items-center">
      <div></div>
      <div>
        <p className="text-slate-600 text-sm" key={expense.id}>
          {expense.expenseName}
        </p>
        <p className="text-slate-600 text-sm">
          {formatDate(expense.date!.toString())}
        </p>
      </div>
      <AmountDisplay amount={expense.amount} />
    </div>
  );
};

export default ExpenseDetails;
