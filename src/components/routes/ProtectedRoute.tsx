import { ReactNode } from 'react';
import { MoonLoader } from 'react-spinners';

import { useAuth } from '../../hooks/useAuth';
import styles from './ProtectedRoute.module.css';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className={styles.container}>
        <MoonLoader />;
      </div>
    );
  }

  return <>{children}</>;
};
