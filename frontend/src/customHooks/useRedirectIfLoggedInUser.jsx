import { Context } from '../Context';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';


export default function useRedirectIfLoggedInUser(components) {
  const { loggedInUser } = useContext(Context);

  if (loggedInUser) {
    return <Navigate to="/" replace={true} />;
  }
  return components
}
