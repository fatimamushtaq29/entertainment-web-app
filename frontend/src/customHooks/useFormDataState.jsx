import { useReducer } from 'react';

export default function useFormDataState(formData) {
  function hideAllErrorDisplay() {
    const errorObject = {};
    Object.keys(formData).forEach((input) => (errorObject[input] = 'hidden'));
    return errorObject;
  }
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'HANDLE_CHANGE': {
          return {
            ...state,
            formData: { ...state.formData, [action.name]: action.value },
            errorDisplay: {
              ...state.errorDisplay,
              [action.name]: 'hidden',
              email: 'hidden',
            },
            isSubmit: false,
          };
        }
        case 'RESPONSE_ERROR': {
          return {
            ...state,
            errorDisplay: { ...state.errorDisplay, email: 'inline-block' },
            errorMessage: { ...state.errorMessage, email: action.error },
          };
        }
        case 'SUBMITTED': {
          return { ...state, isSubmit: true };
        }
        case 'EMPTY_FIELD_ERROR': {
          return {
            ...state,
            errorDisplay: {
              ...state.errorDisplay,
              [action.name]: 'inline-block',
            },
            errorMessage: {
              ...state.errorMessage,
              [action.name]: "Can't be empty",
            },
          };
        }
        case 'PASSWORDS_MATCH': {
          return {
            ...state,
            errorDisplay: { ...state.errorDisplay, repeatPassword: 'hidden' },
          };
        }
        case 'PASSWORDS_DONT_MATCH': {
          return {
            ...state,
            errorDisplay: {
              ...state.errorDisplay,
              repeatPassword: 'inline-block',
            },
            errorMessage: {
              ...state.errorMessage,
              repeatPassword: "Passwords don't match",
            },
          };
        }
        default:
          return state;
      }
    },
    {
      formData: formData,
      errorDisplay: hideAllErrorDisplay(),
      isSubmit: false,
      errorMessage: {},
    }
  );
  return [state, dispatch];
}
