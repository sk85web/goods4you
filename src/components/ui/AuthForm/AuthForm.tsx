import React, { useState } from 'react';

const AuthForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(login, password);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default AuthForm;
