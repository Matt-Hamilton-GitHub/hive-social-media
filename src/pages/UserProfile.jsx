import React from 'react'
import { useContext } from 'react'
import {UserContext }from '../contexts/userContext'
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  const {isAuth} = useContext(UserContext).userState
  console.log(useContext(UserContext).userState)

  if (!isAuth) {
    navigate('/login');
  }

  return (
    <div>{`Authenticated: ${isAuth}`}</div>
  )
}

export default UserProfile