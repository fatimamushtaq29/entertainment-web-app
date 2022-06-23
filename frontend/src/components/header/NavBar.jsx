import NavBarMenu from './NavBarMenu';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as LoginIcon } from '../../images/icon-login.svg';
import { ReactComponent as LogoutIcon } from '../../images/icon-logout.svg';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import { useContext } from 'react';

export default function NavBar() {
  const { loggedInUser, logout } = useContext(Context);
  return (
    <nav
      className="fixed left-0 right-0 z-10 opacity-95 p-[clamp(1rem,0.7615rem+1.0178vw,1.25rem)]
                      m-[clamp(0rem,-1.4313rem+6.1069vw,1.5rem)] mb-0
                      xl:right-auto xl:top-0 xl:py-8 xl:px-7 xl:m-8 bg-semiDarkBlue flex justify-between items-center
                      rounded-[clamp(0rem,-0.5964rem+2.5445vw,0.625rem)] xl:flex-col xl:h-[92vh]"
    >
      <Logo
        className="h-[clamp(1.25rem,0.9160rem+1.4249vw,1.6rem)]
                        w-[clamp(1.563rem,1.1460rem+1.7791vw,2rem)]
                        xl:mb-[75px]"
      />
      <NavBarMenu />
      {loggedInUser ? (
        <LogoutIcon
          title="Logout"
          onClick={logout}
          className="w-[clamp(1.5rem,1.0229rem+2.0356vw,2rem)]
        h-[clamp(1.5rem,1.0229rem+2.0356vw,2rem)]
        xl:w-10 xl:h-10 hover:stroke-[2px] hover:cursor-pointer"
        />
      ) : (
        <Link to="/login">
          <LoginIcon
            title="Login"
            className="hover:stroke-red w-[clamp(1.5rem,1.0229rem+2.0356vw,2rem)]
                        h-[clamp(1.5rem,1.0229rem+2.0356vw,2rem)]
                        xl:w-10 xl:h-10"
          />
        </Link>
      )}
    </nav>
  );
}
