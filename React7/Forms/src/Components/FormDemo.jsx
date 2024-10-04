import React from 'react'
import {useForm} from 'react-hook-form';

const FormDemo = () => {

  const {register,handleSubmit,formState:{errors}}=useForm();

   function handleFormSubmit(obj)
   {
      console.log(obj);
   }

   console.log("err are",errors);

  return (
    <div>
      <h1 className="display-2 text-info">Form Demo</h1>
      {/* Form */}

      <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(handleFormSubmit)}>
         
         {/* Username */}
         <div className="mb-3">
             <label htmlFor="username" className="form-label fs-5">Username</label>
             <input type="text" {...register('username',{required:true,minLength:4})} id="username" className="form-control" />
            {/* validation error message of username */}
            
            {errors.username?.type ==="required" && <p className="text-warning">+Username is requied</p>}
            {errors.username?.type ==="minLength" && <p className="text-warning">Minium length should be 4</p>}
         </div>
         
         {/* email */}
         <div className="mb-3">
             <label htmlFor="email" className="form-label fs-5">Email</label>
             <input type="text" {...register('email')}id="email" className="form-control" />
         </div>
         
         {/* Skills */}
         <div className="mb-3">
              <label>Slect your skills</label>
              
              {/* Skill- 1 */}
              <div className="form-check">
                 <input type="checkbox" {...register('CSS')} id="CSS" className="form-check-input" />
                <label htmlFor="CSS" className="form-check-label">CSS</label>
              </div>

                 {/* Skill- 2 */}
                 <div className="form-check">
                 <input type="checkbox" {...register('HTML')} id="HTML" className="form-check-input" />
                <label htmlFor="HTML" className="form-check-label">HTML</label>
              </div>

                 {/* Skill- 3 */}
                 <div className="form-check">
                 <input type="checkbox" {...register('JS')} id="JS" className="form-check-input" />
                <label htmlFor="JS" className="form-check-label">JS</label>
              </div>

         </div>



          {/* select state */}
         <div className="mb-3">
          <label htmlFor="state" className="form-label">Select State</label>
           <select {...register('state')} id='state' className='form-select'>  
              <option value="Telangana">Telangana</option>
              <option value="Andra pradesh">Andra pradesh</option>
              <option value="chennai">chennai</option>
           </select>
         </div>

         {/* Feedback */}
         <div className="mb-3">
          <label htmlFor="feedback" className="form-label"></label>
          <textarea {...register('feedback')} id="feedback" className='form-control'></textarea>
         </div>


         {/* Submit button */}
        <button type='submit' className='btn btn-info'>Signup</button>

      </form>
    </div>
  )
}

export default FormDemo
