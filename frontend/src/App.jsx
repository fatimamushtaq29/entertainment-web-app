import { Routes, Route } from 'react-router-dom';
import BookmarkedPage from './pages/BookmarkedPage';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TVSeriesPage from './pages/TVSeriesPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  const pagesRoutes = [
    [HomePage, '/'],
    [MoviesPage, '/movies'],
    [TVSeriesPage, '/tvseries'],
    [BookmarkedPage, '/bookmarked'],
    [LoginPage, '/login'],
    [SignUpPage, '/signup'],
  ].map(([Page, pathTo]) => (
    <Route key={pathTo} path={pathTo} element={<Page />} />
  ));

  return <Routes>{pagesRoutes}</Routes>;
}
