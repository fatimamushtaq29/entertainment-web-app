import { Link } from 'react-router-dom';

export default function LoginOrSignUp({paragraphText, spanText, linkTo}) {

  return (
    <p className="text-[15px] font-light leading-tight text-center">
      {paragraphText}
      <Link to={linkTo}>
        <span className="text-red ml-2">{spanText}</span>
      </Link>
    </p>
  );
}
