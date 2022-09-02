import React from 'react'
import {useState} from 'react'


function AddTaskFrom({addTask}) {

  const [name, setNewTask] = useState('')
  const [date, setDate] = useState('')
  const [completed, setCompleted] = useState(false)
  const [reminder, setReminder] = useState(false)

  const formSubmit = (e) =>{
    e.preventDefault();
    
    //add task func

    addTask({name, date, completed, reminder})

    setNewTask('')
    setDate('')
    setReminder(false)
  } 

  return (
    <form onSubmit={formSubmit}>
      <h2>New Task!</h2>
      <div className='form-data'>
        <label className='label'>
          Task Name:
        </label>
        <input type='text' className='input' placeholder='Eg. Wash Car' value={name} onChange={ (e) => setNewTask(e.target.value)}/>
      </div>
      <div className='form-data'>
        <label className='label'>
          Task Date:
        </label>
        <input type='text' className='input' placeholder='Eg. 01 Sept Mon at 13:00' value={date} onChange={ (e) => setDate(e.target.value)}/>
      </div>
      <div className='form-data'>
        <label className='label'>
          Set Reminder:
        </label>
        <input type='checkbox' className='checkbox' checked={reminder} onChange={(e) => setReminder(e.target.checked)}/>
      </div>
      <div className='form-data'>
        <input type='submit' className='save-btn' value='save'/>
      </div>
    </form>
  )
}

export default AddTaskFrom