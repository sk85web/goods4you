import { ReactNode } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { MoonLoader } from 'react-spinners';
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
