import React from 'react'

const TaskCount = (props) => { //{tasks:[]}}
  return (
    <div>
        <p className="display-6 text-warning">Task Count</p>
          <p className="lead">{props.tasks.length}</p>
    </div>
  )
}

export default TaskCount
