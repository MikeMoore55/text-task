import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {FaCheckSquare} from 'react-icons/fa'
import {FaBell} from 'react-icons/fa'

function Task( {tasks, deleteTask, toggleReminder, toggleComplete} ) {
  return (
    <div className={`task ${tasks.reminder ? 'reminder' : '' || tasks.completed ? 'completed' : ''}`}>
      <FaCheckSquare onClick={() => {toggleComplete(tasks.id)}}/>
      <div>
        <h3>{tasks.name}</h3>
        <p>{tasks.date}</p>
      </div>
      <FaTimes onClick={() => {deleteTask(tasks.id)}}/>
      <FaBell onClick={() => {toggleReminder(tasks.id)}}/>
    </div>
  )
}

export default Task