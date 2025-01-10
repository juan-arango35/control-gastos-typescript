import { useMemo, useState } from "react";

const BudgetForm = () => {
    const [budget, setBudget] = useState(0)


    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setBudget(e.target.valueAsNumber)
       
    }

    const isValid =useMemo(()=>{
        return isNaN(budget) || budget <= 0 
    }, [budget])
  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-4xl font-bold text-center text-blue-600">
            Definir Presupuesto
        </label>
        <input type="number" id="budget"
        className="w-full bg-white border border-gray-200 p-2 rounded-lg"
        placeholder="Agrega tu presupuesto"
        name="budget"
        value={budget}
        onChange={handleChange}
        
        />
      </div>
      <input type="submit" className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 mt-2 rounded-lg  text-white font-bold p-3 uppercase disabled:opacity-40" value={"Definir Presupuesto"} 
      disabled={isValid}
      />
    </form>
  );
};

export default BudgetForm;
