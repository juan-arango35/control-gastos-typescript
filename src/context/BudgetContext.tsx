import { createContext} from "react";
import { BudgetActions, BudgetState } from "../reducer/budget-reducer";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetActions>;
  totalExpenses: number;
  remainingBudget: number
};

export const BudgetContext = createContext<BudgetContextProps>(null!);
