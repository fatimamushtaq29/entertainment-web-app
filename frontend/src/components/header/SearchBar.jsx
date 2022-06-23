import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../images/icon-search.svg';

export default function SearchBar() {
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState({ q: '' });
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(event) {
    setSearchQuery({ q: event.target.value });
  }

  useEffect(() => {
    if (location.search === '') {
      setSearchQuery({ q: '' });
    }
  }, [location.search]);

  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams(searchQuery);
  }

  let placeholderText = '';
  switch (location.pathname) {
    case '/':
      placeholderText = 'Search for movies or TV series';
      break;
    case '/movies':
      placeholderText = 'Search for movies';
      break;
    case '/tvseries':
      placeholderText = 'Search for TV series';
      break;
    case '/bookmarked':
      placeholderText = 'Search for bookmarked shows';
      break;
    default:
      placeholderText = 'Search for movies or TV series';
      break;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex space-x-[clamp(1rem,0.5229rem+2.0356vw,1.5rem)]
                        px-[clamp(1rem,0.5229rem+2.0356vw,1.5rem)] md:px-[clamp(1.5rem,0.6429rem+1.7857vw,2.25rem)]"
    >
      <label htmlFor="search">
        <SearchIcon
          className="h-[clamp(1.5rem,1.0229rem+2.0356vw,2rem)] 
                                                            w-[clamp(1.5rem,1.0229rem+2.0356vw,2rem)]"
        />
      </label>
      <input
        className="bg-transparent w-full pb-3.5 text-[clamp(1rem,0.5229rem+2.0356vw,1.5rem)] font-light
                            leading-tight text-white caret-red focus:outline-none focus:border-b focus:border-greyishBlue"
        type="text"
        id="search"
        value={searchQuery.q}
        onChange={handleChange}
        placeholder={placeholderText}
      />
    </form>
  );
}
