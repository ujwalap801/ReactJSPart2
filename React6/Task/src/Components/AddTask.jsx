import React from 'react';
import { useState } from 'react';

function AddTask(props)   //{addNewTask:F}
{
    
    return (
        <div>
            <p className="display-6 text-warning">Add New Task</p>
            <button className="btn btn-info" onClick={props.addNewTask}>Add New</button>
        </div>
    );
};

export default AddTask;
