import React from 'react'
import {useState} from 'react'


function AddTaskFrom({addTask, onToggle}) {

  const [name, setNewTask] = useState('')
  const [date, setDate] = useState('')
  const [completed, setCompleted] = useState(false)
  const [reminder, setReminder] = useState(false)

  const formSubmit = (e) =>{
    e.preventDefault();
    
    if (name === '') {
      alert("Error: Please ensure there is a name for your task")
    }
    else if(date === ''){
      alert("Error: Please ensure you have a date of some sort")
    }
    else{

    addTask({name, date, completed, reminder})
    
    setNewTask('')
    setDate('')
    setReminder(false)
    onToggle()

    }
  } 

  return (
    <form onSubmit={formSubmit} className='add-form'>
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
      <input type='submit' className='save-btn' value='save'/>
    </form>
  )
}

export default AddTaskFrom