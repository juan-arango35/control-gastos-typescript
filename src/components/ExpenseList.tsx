import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseList = () => {
  const { state } = useBudget();
 
  //comprobamos si esta vacio , es una forma con useMemo
  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);
  return (
    <div className="mt-10">
    { isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay gastos aún</p> : (
        <>
        <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos</p>
        {
            state.expenses.map((expense) => (
               <ExpenseDetails expense={expense} key={expense.id}/>
            ))
        }
        </>
    )}
        
        
      
    </div>
  );
};

export default ExpenseList;
