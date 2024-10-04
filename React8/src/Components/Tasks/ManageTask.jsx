import React, { useState } from 'react';
import TaskCount from './TaskCount';
import AddTask from './AddTask';
import TaskList from './TaskList';


const ManageTask = () => {
     
    // state
    const [tasks,setTasks] = useState([]);

    return (
        <div className='display-1 text-primary'>
            
            <h1>Tasks Management System</h1>
            
            <div className="d-flex justify-content-around mt-5">
                <AddTask  tasks={tasks} setTasks={setTasks}/>
                <TaskList tasks={tasks} />
                <TaskCount  tasks={tasks}/>
              
            
            </div>
        </div>
    );
};

export default ManageTask;
