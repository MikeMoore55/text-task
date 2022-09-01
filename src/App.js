import react from 'react';
import './App.css';
import Header from './components/Header';
import AddBtn from './components/AddBtn';
import SortBtn from './components/SortBtn';
import TaskList from './components/TaskList';
import {useState, useEffect} from 'react'

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    
    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

    setTasks(tasks.filter((tasks)=> tasks.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder : !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers:{'Content-type' : 'application/json'}, 
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((tasks) => 
        tasks.id === id ? {
        ...taskToToggle, reminder: data.reminder} : tasks
        
      )
    )
  }

  const toggleComplete = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, completed : !taskToToggle.completed}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers:{'Content-type' : 'application/json'}, 
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((tasks) => 
        tasks.id === id ? {
        ...taskToToggle, completed: data.completed} : tasks
        
      )
    )
  }


  return (
    <div className='App'>
      <Header/>
      <div className='btns-container'>
        <AddBtn btnText={'Add'}/> 
        <SortBtn/>
      </div>
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} toggleComplete={toggleComplete}/>
      
    </div>
  );
}

export default App;
