import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import LandingPageLayout from './layout/LandingPageLayout';
import Home from './routes/Home/Home';
import ProductDetails from './routes/ProductDetails/ProductDetails';
import Cart from './routes/Cart/Cart';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import Auth from './routes/Auth/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: '/login',
    element: <Auth />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
