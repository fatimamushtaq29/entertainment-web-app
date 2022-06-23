import useRedirectIfLoggedInUser from '../customHooks/useRedirectIfLoggedInUser';
import FormContainer from '../components/form/FormContainer';
import Form from '../components/form/Form';
import LoginOrSignUp from '../components/form/LoginOrSignUp';
import { register } from '../services/auth';
import useFormDataState from '../customHooks/useFormDataState';
import useHandleFormData from '../customHooks/useHandleFormData';

export default function SignUpPage() {
  const action = register;
  const signupFormData = {
    email: '',
    password: '',
    repeatPassword: '',
  };
  const [state, dispatch] = useFormDataState(signupFormData);
  const [handleSubmit, formInputElements] = useHandleFormData(
    state,
    dispatch,
    action
  );
  return useRedirectIfLoggedInUser(
    <FormContainer>
      <Form handleSubmit={handleSubmit} formInputElements={formInputElements} />
      <LoginOrSignUp
        paragraphText="Already have an account"
        spanText="Login"
        linkTo="/login"
      />
    </FormContainer>
  );
}
