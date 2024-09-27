import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useGetCurrentUserQuery } from '../redux/services/AuthService';
import { AppDispatch } from '../redux/store';
import { removeUser, setUser } from '../redux/slices/userSlice';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading, error } = useGetCurrentUserQuery();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }

    if (error) {
      dispatch(removeUser());
      localStorage.removeItem('token');
      navigate('/login');
    } else if (data) {
      dispatch(setUser(data));
    }
  }, [data, error, navigate, dispatch]);

  return { isLoading };
};
