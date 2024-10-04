import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Register() {
     
  const {register,handleSubmit, formState:{errors}}=useForm();
  const navigate = useNavigate();
  
 const [error,setError] = useState(null);

  function handleFormSubmit(newUser)
  {
    console.log(newUser);
    // Make HTTP POST req to save newUser in API
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
    .then((res)=>
    {
      if(res.status === 201)
      {
        // navigate top login component programatically
        navigate("/login");
      }
    })
    .catch((err) => {
      setError(err)
    });
    
    
  }

  return (
    <div className='mt-4'>
       <h1 className="display-3 text-center text-primary">User Registration</h1>
    
    {/* display error message */}
     {
      error !==null && <p className='fs- text-warning text-center'>{error.message}</p>
     }


    <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(handleFormSubmit)}>

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



      {/* Email */}
      <div className="mb-3">
          <label className="form-label" htmlFor='em'>Email </label>
          <input type='email' {...register("email")} id="em" className='form-control'></input>
      </div>



      {/* DOB*/}
      <div className="mb-3">
          <label className="form-label" htmlFor='db'> Date of Birth</label>
          <input type='date' {...register("dob")} id="db" className='form-control'></input>
      </div>

      {/* /Submit button */}
       <button className="btn btn-info d-block mx-auto" type='submit'>Register</button>
    </form>
    
    </div>
  )
}

export default Register
