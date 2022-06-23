import useRedirectIfLoggedInUser from '../customHooks/useRedirectIfLoggedInUser';
import FormContainer from '../components/form/FormContainer';
import Form from '../components/form/Form';
import LoginOrSignUp from '../components/form/LoginOrSignUp';
import { login } from '../services/auth';
import useFormDataState from '../customHooks/useFormDataState';
import useHandleFormData from '../customHooks/useHandleFormData';

export default function LoginPage() {
  const action = login;
  const formData = { email: '', password: '' };

  const [state, dispatch] = useFormDataState(formData);
  const [handleSubmit, formInputElements] = useHandleFormData(
    state,
    dispatch,
    action
  );
  return useRedirectIfLoggedInUser(
    <FormContainer>
      <Form handleSubmit={handleSubmit} formInputElements={formInputElements} />
      <LoginOrSignUp
        paragraphText="Don't have an account?"
        spanText="Sign Up"
        linkTo="/signup"
      />
    </FormContainer>
  );
}
