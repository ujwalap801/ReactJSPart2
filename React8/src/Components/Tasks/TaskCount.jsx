import React from 'react'

const TaskCount = (props) => { //{tasks:[]}}
  
  return (
    <div className='text-center'>
       <h2>Add Task</h2>
        <p className='fs-1'>{props.tasks.length}</p>
    </div>
  )
}

export default TaskCount
