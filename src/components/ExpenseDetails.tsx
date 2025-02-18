import { useMemo } from "react";
import { Expense } from "../types/index";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { useBudget } from "../hooks/useBudget";
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


const {dispatch} = useBudget()

  const cateforyInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({type: "get-expense-by-id", payload: { id: expense.id }})}>Actualizar</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => dispatch({ type: "remove-expense", payload: { id: expense.id } })}
        destructive={true}
        >Eliminar</SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={30}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="bg-white shadow-lg   py-10 rounded-lg border-b border-gray-200 flex gap-5 items-center pr-7">
          <div>
            <img
              src={`/icono_${cateforyInfo.icon}.svg`}
              alt="Icono gasto"
              className="w-20"
            />
          </div>
          <div className="flex-1 space-y-3 text-sm font-bold uppercase text-slate-500">
            <p>{cateforyInfo.name}</p>
            <p className="text-slate-600 text-sm" key={expense.id}>
              {expense.expenseName}
            </p>
            <p className="text-slate-600 text-sm">
              {formatDate(expense.date!.toString())}
            </p>
          </div>
          <AmountDisplay amount={expense.amount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ExpenseDetails;
