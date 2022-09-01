import React from 'react'
import Task from './Task'

function TaskList( {tasks, deleteTask} ) {
  return (
    <div className='task-list'>
      { tasks.map((task)=>
        <Task key={task.id} tasks={task} deleteTask={deleteTask}/>
      )}
    </div>
  )
}

export default TaskList