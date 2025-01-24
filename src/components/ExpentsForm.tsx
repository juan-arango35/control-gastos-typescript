import { categories } from "../data/categories"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import type { DraftExpense } from "../types";


const ExpentsForm = () => {
    const [expense  , setExpense  ] = useState<DraftExpense>({
        amount: 0,
        expenseName : "",
        category: "",
        date : new Date(),
    })
  return (
   <form  className="space-y-5">
    <legend className="uppercase font-black text-2xl border-b-4 border-blue-500 py-2 text-center">
        Nuevo Gasto 
    </legend>
    <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">Nombre del Gasto :</label>
        <input type="text" id="expenseName"  placeholder="agrega el gasto" className="bg-slate-100 p-2" 
        name="expenseName"
        value={expense.expenseName}
        />
    </div>
    <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">Cantidad :</label>
        <input type="number" id="amount"  placeholder="agrega el gasto" className="bg-slate-100 p-2" 
        name="amount"
        value={expense.amount}
        />
    </div>
    <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">Categoria :</label>
        <select id="category"   
        className="bg-slate-100 p-2" 
        name="category"
        value={expense.category}
        >
            <option value="">-- Seleccione --</option>
            {
                categories.map(category =>(
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))
            }
        </select>
    </div>
    <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">Fecha Gasto :</label>
      <DatePicker className={"bg-slate-100 p-2 border-0"}
      value={expense.date}
      />
     
    </div>
    <input type="submit"
    className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
    value={"Agregar Gasto"}
    />

   </form>
  )
}

export default ExpentsForm