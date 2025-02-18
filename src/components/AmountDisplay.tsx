type AmountDisplayProps = {
    label?: string;
    amount: number;
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}


const AmountDisplay = ({label, amount}:AmountDisplayProps) => {
  return (
    <p className="text-2xl font-bold  text-blue-600 text-center" >

        <span className="font-black">{label && `${label}: `}</span> <span className="text-black">{formatCurrency(amount)}</span>
    </p>
  )
}

export default AmountDisplay