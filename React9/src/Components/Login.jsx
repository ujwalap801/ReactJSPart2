import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { loginContextObj } from '../Contexts/LoginContext';



function Login() {

  const {register,handleSubmit, formState:{errors}}=useForm();

  const navigate =useNavigate();

  const {handleUserLogin,userLoginStatus,currentUser,loginErr} = useContext(loginContextObj);
  console.log(useContext(loginContextObj));
  // Navigate to userProfile upon successful login
  // useEffect(()=>
  // {
  //   if(userLoginStatus === true && currentUser!== null)
  //   {
  //     navigate(`/user-profile/${currentUser?.username}`);
  //   }
  // },[userLoginStatus])
  //Navigate to userProfile upon successful login
  useEffect(() => {
    if (userLoginStatus === true && currentUser !== null) {
      navigate(`/user-profile/${currentUser.username}`);
    }
  }, [userLoginStatus, currentUser, navigate]);

  return (
    <div>
      <h1 className="display-3 text-center text-primary">User Login</h1>
      {/* Login error message */}
      {loginErr !== null && <p className='text-warning text-center fs-2'>{loginErr.message}</p>}
      <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(handleUserLogin)}>
        {/* Username */}
        <div className="mb-3">
          <label className="form-label" htmlFor='un'>Username </label>
          <input type='text' {...register("username")} id="un" className='form-control' />
        </div>
        {/* Password */}
        <div className="mb-3">
          <label className="form-label" htmlFor='pw'>Password </label>
          <input type='password' {...register("password")} id="pw" className='form-control' />
        </div>
        {/* Submit button */}
        <button className="btn btn-info d-block mx-auto" type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;