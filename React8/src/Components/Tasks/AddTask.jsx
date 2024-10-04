import React from 'react';
import { useState } from 'react';
import {useForm} from 'react-hook-form';

function AddTask(props)   //{seTasks:F}
{

   const {
    register,
    handleSubmit,
    formState:{errors},
    reset
    } = useForm();

    // function
    function addNewTask(taskObj)
    {
         console.log(taskObj);
        // Extracting newTask from taskObj
        const newTask = taskObj.newTask;
        // Updating tasks state
        props.setTasks([...props.tasks, newTask]);
        reset();
    }



    return (
        <div className='text-center'>
            <h2>Add Task</h2>
            <form className='mt-5' onSubmit={handleSubmit(addNewTask)} >
            <input type='text' {...register('newTask',{required:true})}     //newTask -what ever task we type
            className='form-control mb-4' placeholder= "Add Task Here.."></input>
             
             
             {/* Validation err msg */}
             {errors.newTask?.type === "required" &&  <p className='text-danger'> Please enter a task</p>}
             <button className='btn btn-warning' type='submit'>Add</button>
           
            </form>
            
        </div>
    );
};

export default AddTask;
