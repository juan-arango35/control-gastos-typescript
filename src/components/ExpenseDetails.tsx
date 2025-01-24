import { Expense } from '../types/index';
type ExpenseDetailsProps = {
    expense:Expense
}

const ExpenseDetails = ({expense}:ExpenseDetailsProps) => {
  return (
    <p className="text-gray-600 text-2xl font-bold my-5" key={expense.id}>
    {expense.expenseName} - {expense.amount} SOLES - {expense.category}
</p>
  )
}

export default ExpenseDetails