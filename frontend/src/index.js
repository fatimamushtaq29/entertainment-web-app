import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './Context';
import App from './App';
import './index.css';

createRoot(document.querySelector('#root')).render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);
