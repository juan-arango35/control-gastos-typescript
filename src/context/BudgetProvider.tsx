import { useMemo, useReducer} from "react";

import { BudgetContext } from "./BudgetContext";
import { budgetReducer, initialState } from "../reducer/budget-reducer";


type BudgetProviderProps = {
  children: React.ReactNode
}
export const BudgetProvider = ({ children }:BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState)

const totalExpenses = useMemo(()=>state.expenses.reduce((total, expense) => total + expense.amount, 0) , [state.expenses])
const remainingBudget = state.budget - totalExpenses
    

    return (
      <BudgetContext.Provider
        value={{ state, dispatch, totalExpenses, remainingBudget }}
      >
        {children}
      </BudgetContext.Provider>
    );
  };
  