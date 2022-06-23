import { useLocation } from 'react-router-dom';

export default function useIsThereSearchTerm() {
  const location = useLocation();
  const queryString = new URLSearchParams(location.search);
  const searchTerm = queryString.get('q');
  const isThereSearchTerm = searchTerm !== null && searchTerm.trim() !== '';
  return {searchTerm, isThereSearchTerm}
}
