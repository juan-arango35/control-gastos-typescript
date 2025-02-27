import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseList = () => {
  const { state } = useBudget();
 
  
  //filtrado en la lista
  const filteredExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) 
  : state.expenses
  
  //comprobamos si esta vacio , es una forma con useMemo
  const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses]);
  return (
    <div className="mt-10">
    { isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay gastos aún</p> : (
        <>
        <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos</p>
        {
            filteredExpenses.map((expense) => (
               <ExpenseDetails expense={expense} key={expense.id}/>
            ))
        }
        </>
    )}
        
        
      
    </div>
  );
};

export default ExpenseList;
