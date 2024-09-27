import { ReactNode } from 'react';
import { MoonLoader } from 'react-spinners';
import { Navigate } from 'react-router-dom';

import styles from './ProtectedRoute.module.css';
import { useGetCurrentUserQuery } from '../../redux/services/AuthService';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data, isLoading } = useGetCurrentUserQuery();
  console.log(data, isLoading);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <MoonLoader />;
      </div>
    );
  }

  if (data) {
    return <>{children}</>;
  } else {
    localStorage.removeItem('token');
    return <Navigate to="/login" />;
  }
};
