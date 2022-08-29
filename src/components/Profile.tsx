import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addAge } from '../features/user/user-slice';

function Profile() {
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(addAge());
  }

  

  return (
    <div>
      <h2>Logged user: </h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age} <button onClick={handleClick}>+</button></p> 
    </div>
  )
}

export default Profile