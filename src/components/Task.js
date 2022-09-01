import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {FaCheckSquare} from 'react-icons/fa'
import {FaBell} from 'react-icons/fa'

function Task( {tasks, deleteTask} ) {
  return (
    <div className={`task ${tasks.reminder ? 'reminder' : '' || tasks.completed ? 'completed' : ''}`}>
      <FaCheckSquare/>
      <div>
        <h3>{tasks.name}</h3>
        <p>{tasks.date}</p>
      </div>
      <FaTimes onClick={() => {deleteTask(tasks.id)}}/>
      <FaBell/>
    </div>
  )
}

export default Task