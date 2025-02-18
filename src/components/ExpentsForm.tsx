import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { ChangeEvent, useEffect, useState } from "react";
import type { DraftExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";
const ExpentsForm = () => {
  const [expense, setExpense] = useState<DraftExpense>({
    amount:0,
    expenseName: "",
    category: "",
    date: new Date(),
  });

  const [error, setError] = useState("")
  const { dispatch, state } =useBudget()

  useEffect(() => {
    if(state.editingId){
      const editingExpenses = state.expenses.filter(currentExpense => currentExpense.id === state.editingId)[0]
      setExpense(editingExpenses)
    }
  },[state.editingId])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmountField = ["amount"].includes(name);
    console.log(isAmountField);
    setExpense({
      ...expense,
     /*  [name]: isAmountField ? +value : value, */
      [name]: isAmountField ? (value === "" ? value : +value) : value,
    });
  };

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    });
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //validacion
    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios")
      return
    }
   //agregar un nuevo gasto o actualizar
   if(state.editingId){
     dispatch({type: "update-expense", payload: { expense : {id: state.editingId, ...expense} }})
   }else  {

     dispatch({ type: "add-expense", payload: { expense } })
   }
   //reiniciar el formulario
   setExpense({
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date(),
   })
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="uppercase font-black text-2xl border-b-4 border-blue-500 py-2 text-center">
        Nuevo Gasto
      </legend>
      { error && <ErrorMessage>{error}</ErrorMessage> }
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Nombre del Gasto :
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="agrega el gasto"
          className="bg-slate-100 p-2"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Cantidad :
        </label>
        <input
          type="number"
          id="amount"
          placeholder="agrega el gasto"
          className="bg-slate-100 p-2"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Categoria :
        </label>
        <select
          id="category"
          className="bg-slate-100 p-2"
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Fecha Gasto :
        </label>
        <DatePicker
          className={"bg-slate-100 p-2 border-0"}
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>
      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={"Agregar Gasto"}
      />
    </form>
  );
};

export default ExpentsForm;
