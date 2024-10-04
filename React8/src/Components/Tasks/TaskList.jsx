import React from 'react';

const TaskList = (props) => {    //tasks:[]
    return (
        <div className='text-center'>
            <h2>Add Task</h2>
            {
                props.tasks.map((task,index)=>(
                    <p className='fs-4' key={index}>{task}</p>
                ))
            }
        </div>
    );
};

export default TaskList;