import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import LandingPageLayout from './layout/LandingPageLayout';
import Home from './routes/Home/Home';
import ProductDetails from './routes/ProductDetails/ProductDetails';
import Cart from './routes/Cart/Cart';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import Auth from './routes/Auth/Auth';
import { ProtectedRoute } from './components/routes/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <LandingPageLayout />
        </ProtectedRoute>
      ),
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
  ],
  {
    basename: '/goods4you',
  }
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
