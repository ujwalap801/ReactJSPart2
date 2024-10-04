import React from 'react';

const TaskList = (props) => {   // {tasks: []}
    return (
        <div>
            <p className="display-6 text-warning">List of Tasks</p>
            {
                props.tasks.map((t, index) => (  // Added index for the key
                    <p className='lead' key={index}>{t}</p>  // Use curly braces to render the task
                ))
            }
        </div>
    );
};

export default TaskList;
