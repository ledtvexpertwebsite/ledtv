import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TermsandConditions from './components/routers/Terms&Conditions.jsx';
import Privacy from './components/routers/privacy.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Termsand&Conditions",
    element: <TermsandConditions />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
