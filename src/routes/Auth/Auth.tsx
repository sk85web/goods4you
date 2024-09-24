import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
// import { useNavigate } from 'react-router-dom';

import Header from '../../components/layout/Header/Header';
import AuthForm from '../../components/ui/AuthForm/AuthForm';
// import { useEffect } from 'react';

const Auth = () => {
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (localStorage.getItem('token')) {
  //       console.log('token');
  //       navigate('/');
  //     }
  //   }, [navigate]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sign In | Goods4you</title>
          <meta
            name="description"
            content="Any products from famous brands with worldwide delivery"
          />
        </Helmet>

        <Header />
        <div>
          <h1>Auth Page</h1>
          <AuthForm />
        </div>
      </HelmetProvider>
    </>
  );
};

export default Auth;
