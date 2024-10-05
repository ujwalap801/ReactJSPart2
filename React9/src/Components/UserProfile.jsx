import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CiEdit } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import { loginContextObj } from '../Contexts/LoginContext';

const UserProfile = () => {

    const { currentUser,setCurrentUser } = useContext(loginContextObj); // Access current user details
    const [userEditStatus, setUserEditStatus] = useState(false); // Correctly initialize useState
    const { register, handleSubmit, setValue } = useForm();

    function onUserProfileEdit() {
        setUserEditStatus(true);

        // Display existing user info in the form fields
        setValue('username', currentUser.username);
        setValue('email', currentUser.email);
        setValue('dob', currentUser.dob);
    }

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data);  // You can update the user's data here or send it to an API
      fetch(`http://localhost:3000/users/${currentUser.id}`,{
        headers:{"Content-Type":"application/json"},
        method:"PATCH",
        body:JSON.stringify(data)
      }).then(res=>res.json())
      .then((editUser)=>
        {
          setCurrentUser(editUser)
          setUserEditStatus(false);
        })
      .catch(err=>console.log(err))

      };

    return (
        <div className='text-center'>
            <h1>User Profile</h1>

            {
                userEditStatus === false ? (
                    <div className="bg-light rounded-4 p-5 text-info fs-3">
                        <p className="lead">{currentUser.username}</p>
                        <p className="lead">{currentUser.email}</p>
                        <p className="lead">{currentUser.dob}</p>
                        <button className="btn btn-warning" onClick={onUserProfileEdit}> 
                            <CiEdit /> Edit Profile
                        </button>
                    </div>
                ) : (
                    <form className='w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            type="text" 
                            {...register('username')} 
                            className="form-control mb-3" disabled
                        />
                        <input 
                            type="email" 
                            {...register('email')}  
                            className="form-control mb-3" 
                        />
                        <input 
                            type="date" 
                            {...register('dob')} 
                            className="form-control mb-3" 
                        />
                        <button type="submit" className="btn btn-success">
                            <IoSaveOutline className='me-3' /> Save
                        </button>
                    </form>
                )
            }
        </div>
    );
};

export default UserProfile;
