import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/layout/Header/Header';
import AuthForm from '../../components/ui/AuthForm/AuthForm';
import styles from './Auth.module.css';

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

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
        <div className={styles.container}>
          <AuthForm />
        </div>
      </HelmetProvider>
    </>
  );
};

export default Auth;
