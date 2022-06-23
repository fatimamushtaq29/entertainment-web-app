import { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';
import FormInput from '../components/form/FormInput';

export default function useHandleFormData(
  { errorDisplay, isSubmit, formData, errorMessage },
  dispatch,
  action
) {
  const { setToken } = useContext(Context);
  const navigate = useNavigate();
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  useEffect(() => {
    const registerUser = async () => {
      try {
        if (
          Object.values(errorDisplay).every((value) => value === 'hidden') &&
          isSubmit
        ) {
          const response = await action(formData);
          localStorage.setItem('token', `Bearer ${response.token}`);
          setToken();
          navigate('/', { replace: true });
        }
      } catch (error) {
        dispatch({
          type: 'RESPONSE_ERROR',
          error: error.response.data.message,
        });
      }
    };
    registerUser();
  }, [errorDisplay, formData, isSubmit, navigate, setToken, dispatch, action]);

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({ type: 'HANDLE_CHANGE', name, value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMITTED' });
    for (let name in formData) {
      if (!formData[name]) {
        dispatch({ type: 'EMPTY_FIELD_ERROR', name });
      }
    }

    if (formData.repeatPassword) {
      if (formData.password === formData.repeatPassword) {
        dispatch({ type: 'PASSWORDS_MATCH' });
      } else {
        dispatch({ type: 'PASSWORDS_DONT_MATCH' });
      }
    }
  };

  const placeholderText = {
    email: 'Email address',
    password: 'Password',
    repeatPassword: 'Repeat Password',
  };

  const formInputElements = Object.keys(formData).map((input) => (
    <FormInput key={input}>
      <input
        ref={input === 'email' ? focusRef : null}
        className="bg-transparent w-full pb-[18px] text-[15px] font-light
                    leading-tight text-white indent-4 caret-red border-b border-greyishBlue 
                    focus:outline-none focus:border-white"
        placeholder={placeholderText[input]}
        value={formData[input]}
        onChange={handleChange}
        name={input}
      />
      <p
        className={`${errorDisplay[input]} absolute text-[13px] font-light leading-tight text-red right-0 top-0.5`}
      >
        {errorMessage[input]}
      </p>
    </FormInput>
  ));
  return [handleSubmit, formInputElements];
}
