import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { AppDispatch } from '../../../redux/store';
import { setUser } from '../../../redux/slices/userSlice';
import StateDisplay from '../StateDisplay/StateDisplay';
import { authApi } from '../../../redux/services/AuthService';
import FormInput from '../FormInput/FormInput';
import styles from './AuthForm.module.css';
import Button from '../Button/Button';

const AuthForm = () => {
  const [formState, setFormState] = useState({
    login: '',
    password: '',
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [loginUser, { data: userFetchData, isLoading, error }] =
    authApi.useLoginUserMutation();

  const handleInputChange = (key: keyof typeof formState, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (userFetchData) {
      dispatch(setUser(userFetchData));
      localStorage.setItem('token', userFetchData.accessToken);
      toast.success('Login succeful!');
      navigate('/');
    }
  }, [userFetchData, dispatch, navigate]);

  useEffect(() => {
    if (error) {
      toast.error('Bad credentials');
    }
  }, [error]);

  const onSubmitForm = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginUser({
      username: formState.login,
      password: formState.password,
    });
  };

  if (isLoading) return <StateDisplay status="loading" message="Loading..." />;

  return (
    <>
      <h1 className={styles.title}>Sign in</h1>
      <form onSubmit={onSubmitForm} action="/" className={styles.container}>
        <FormInput
          type="text"
          placeholder="Login"
          value={formState.login}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange('login', e.target.value)
          }
        />
        <FormInput
          type="password"
          placeholder="Password"
          value={formState.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange('password', e.target.value)
          }
        />
        <div className={styles.btnField}>
          <Button
            type="submit"
            ariaLabel="sign in"
            children="Sign in"
            isDisabled={isLoading}
            className={styles.formBtn}
          />
        </div>
      </form>
    </>
  );
};

export default AuthForm;
