
type ErrorMessageProps = {
    children: React.ReactNode
}

const ErrorMessage = ({children}:ErrorMessageProps) => {
  return (
    <p className='text-red-600 text-center text-sm font-bold'>{children}</p>
  )
}

export default ErrorMessage