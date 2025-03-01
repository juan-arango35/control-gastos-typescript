import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

const BudgetTracker = () => {
  const { state, totalExpenses, remainingBudget, dispatch } = useBudget();
  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2);
  console.log(percentage);



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        {/*  <img src="/grafico.jpg" alt="Grafica de gastos" /> */}
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage ===100 ? "#dc2626" : "#3b82f6",
            textSize: "10px",
            textColor: percentage ===100 ? "#dc2626" : "#3b82f6",

            trailColor: "#f5f5f5",
          })}
          text={`${percentage}% Gastado`}
        />
      </div>
      <div className="flex flex-col justify-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
          onClick={
            ()=> dispatch({type: "reset-app"})
          }
        >
          Resetar App
        </button>
        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={remainingBudget} />
        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
};

export default BudgetTracker;
