import React from 'react'
import Task from './Task'

function TaskList( {tasks, deleteTask, toggleReminder, toggleComplete} ) {
  return (
    <div className='task-list'>
      <h2>Your Tasks...</h2>
      { tasks.map((task)=>
        <Task key={task.id} tasks={task} deleteTask={deleteTask} toggleReminder={toggleReminder} toggleComplete={toggleComplete}/>
      )}
    </div>
  )
}

export default TaskList