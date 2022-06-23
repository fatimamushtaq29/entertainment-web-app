import { ReactComponent as IconNavHome } from '../../images/icon-nav-home.svg';
import { ReactComponent as IconNavMovies } from '../../images/icon-nav-movies.svg';
import { ReactComponent as IconNavTvSeries } from '../../images/icon-nav-tv-series.svg';
import { ReactComponent as IconNavBookmark } from '../../images/icon-nav-bookmark.svg';
import { NavLink } from 'react-router-dom';
import { Context } from '../../Context';
import { useContext } from 'react';

export default function NavBarMenu() {
  const { loggedInUser } = useContext(Context);
  const iconClasses = `hover:fill-red h-[clamp(1rem,0.7615rem+1.0178vw,1.25rem)]
  w-[clamp(1rem,0.7615rem+1.0178vw,1.25rem)]`
  const navBarIcons = [
    [IconNavHome, '/', 'Home'],
    [IconNavMovies, '/movies', 'Movies'],
    [IconNavTvSeries, '/tvseries', 'Series']
  ].map(([Icon, linkTo, title]) => (
    <NavLink to={linkTo} key={linkTo}>
      <Icon
        className={iconClasses}
        title={title}
      />
    </NavLink>
  ));
  return (
    <div
      className="flex space-x-[clamp(1.5rem,1.0229rem+2.0356vw,2rem)] xl:flex-col xl:space-x-0
                        xl:space-y-10 xl:mb-auto"
    >
      {navBarIcons}
      {loggedInUser && <NavLink to='/bookmarked'>
        <IconNavBookmark className={iconClasses} title='Bookmarked'/>
      </NavLink>}
    </div>
  );
}
