import { useReducer } from "react";
import { budgetReducer, initialState } from "../reducer/budget-reducer";
import { BudgetContext } from "./BudgetContext";

type BudgetProviderProps = {
  children: React.ReactNode
}
export const BudgetProvider = ({ children }:BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);

    return (
      <BudgetContext.Provider
        value={{ state, dispatch}}
      >
        {children}
      </BudgetContext.Provider>
    );
  };
  