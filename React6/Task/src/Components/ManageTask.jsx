import React, { useState } from 'react';
import TaskCount from './TaskCount';
import AddTask from './AddTask';
import TaskList from './TaskList';


const ManageTask = () => {
    
    // state
   const [tasks, setTasks] = useState([]);

   // function to add a new task
    const addNewTask = () => {
    const newTask = `Task ${Math.random()}`; 
    setTasks([...tasks, newTask]); 
};

console.log(tasks);
    return (
        <div className='display-1 text-primary'>
            
            <h1>Tasks Management System</h1>
            
            <div className="d-flex justify-content-around mt-5">
                <AddTask addNewTask={addNewTask} />
                <TaskList tasks={tasks} />
                <TaskCount  tasks={tasks} />
              
            
            </div>
        </div>
    );
};

export default ManageTask;
