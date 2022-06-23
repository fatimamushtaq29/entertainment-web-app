import { ReactComponent as Logo } from '../../images/logo.svg';
import {Link} from 'react-router-dom'

export default function FormContainer({ children }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center mx-6 space-y-[clamp(3.75rem,3.0344rem+3.0534vw,4.5rem)] md:clamp(4.5rem,3.6429rem+1.7857vw,5.25rem)">
      <Link to='/'><Logo className="h-[1.6rem] w-8" /></Link>
      <div className="w-full max-w-[400px] space-y-6 bg-semiDarkBlue p-[clamp(1.5rem,1.0229rem+2.0356vw,2rem)] pb-8 rounded-[clamp(0.625rem,0.0286rem+2.5445vw,1.25rem)]">
        {children}
      </div>
    </div>
  );
}
