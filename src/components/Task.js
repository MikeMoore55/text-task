import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {FaCheckSquare} from 'react-icons/fa'
import {FaBell} from 'react-icons/fa'

function Task( {tasks, deleteTask, toggleReminder, toggleComplete} ) {
  return (
    <div className={`task ${tasks.reminder ? 'reminder' : '' || tasks.completed ? 'completed' : ''}`}>
      <FaCheckSquare className='check-icon' onClick={() => {toggleComplete(tasks.id)}}/>
      <div className='task-info'>
        <h3>{tasks.name}</h3>
        <h3>{tasks.date}</h3>
      </div>
      <FaTimes className='del-icon' onClick={() => {deleteTask(tasks.id)}}/>
      <FaBell className='not-icon' onClick={() => {toggleReminder(tasks.id)}}/>
    </div>
  )
}

export default Task