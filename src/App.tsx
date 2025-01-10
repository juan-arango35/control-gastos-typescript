import BudgetForm from "./components/BudgetForm";

function App() {
  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="text-4xl text-white text-center font-black uppercase">
          Planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  );
}

export default App;
