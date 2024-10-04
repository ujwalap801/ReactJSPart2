import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {

  const {register,handleSubmit, formState:{errors}}=useForm();
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState(null);

   function handleUserLogin(data) {

    const { username, password } = data; // Destructure the username and password from the form data
  
    // HTTP GET REQ
    fetch(`http://localhost:3000/users?username=${username}&password=${password}`, { method: "GET" })
      .then((res) => res.json())
      .then(userObj => {
        if (userObj.length > 0) {
          navigate(`/user-profile/${userObj[0].username}`, { state: userObj[0] });

        } else {
          setLoginErr({message:"Invalid Username or Password"});
        }
      })
      .catch(err => setLoginErr(err));
  }
  
  
   return (
    <div>
     
     <h1 className="display-3 text-center text-primary">User Login</h1>
     
     {/* login error messgae */}
          {
            loginErr !== null && <p className='text-warning text-center fs-2'>{loginErr.message}</p>
          }

     <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(handleUserLogin)}>

{/* Username */}
<div className="mb-3">
    <label className="form-label" htmlFor='un'>Username </label>
    <input type='text' {...register("username")} id="un" className='form-control'></input>
</div>



{/* Password */}
<div className="mb-3">
    <label className="form-label" htmlFor='pw'>Password </label>
    <input type='password' {...register("password")} id="pw" className='form-control'></input>
</div>






{/* /Submit button */}
 <button className="btn btn-info d-block mx-auto" type='submit'>Login</button>
</form>

    </div>
  )
}

export default Login
