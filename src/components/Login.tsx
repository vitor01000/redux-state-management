import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { login, logout } from '../features/user/user-slice';

function Login() {
  const [userName, setUserName] = useState('');
  const dispatch = useAppDispatch();

  function handleClickLogin() {
    dispatch(login({
      name: userName,
      age: 0,
    }));
  }

  function handleClickLogout() {
    dispatch(logout());
  }

  return (
    <div>
      <h2> New User: </h2>
      <b>Name: </b><input type='text' onChange={(event) => setUserName(event.target.value)}></input>
      <button style={{margin: 3}} onClick={handleClickLogin}>
        Login
      </button>
      <button onClick={handleClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default Login