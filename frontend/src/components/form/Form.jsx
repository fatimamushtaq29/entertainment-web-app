import { useLocation } from "react-router-dom"
import FormHeading from './FormHeading'
import FormButton from "./FormButton"

export default function Form({handleSubmit, formInputElements}) {
    const location = useLocation()
    const isLoginForm = location.pathname === '/login'
    const headingText = isLoginForm ? 'Login' : 'Sign Up'
    const buttonText = isLoginForm ? 'Login to your account' : 'Create an account'
  return (
    <form action="POST" className="space-y-10" onSubmit={handleSubmit}>
        <FormHeading>{headingText}</FormHeading>
        <div className="space-y-6">{formInputElements}</div>
        <FormButton>{buttonText}</FormButton>
      </form>
  )
}
