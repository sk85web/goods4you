import { ReactNode, useEffect } from 'react';
import { MoonLoader } from 'react-spinners';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setUser } from '../../redux/slices/userSlice';
import styles from './ProtectedRoute.module.css';
import { useGetCurrentUserQuery } from '../../redux/services/AuthService';
import { AppDispatch } from '../../redux/store';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useGetCurrentUserQuery(undefined, {
    skip: !localStorage.getItem('token'),
  });

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    } else if (error && 'status' in error && error.status === 401) {
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  }, [data, error, dispatch, navigate]);

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
    return <Navigate to={'/login'} />;
  }
};
