import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import AboutPage from '/src/components/pages/AboutPage.jsx';
import PortfolioPage from '/src/components/pages/PortfolioPage.jsx';
import ResumePage from '/src/components/pages/ResumePage.jsx';
import ContactPage from '/src/components/pages/ContactPage.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
