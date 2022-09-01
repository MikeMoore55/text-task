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

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

    setTasks(tasks.filter((tasks)=> tasks.id !== id))
  }


  return (
    <div className='App'>
      <Header/>
      <div className='btns-container'>
        <AddBtn btnText={'Add'}/> 
        <SortBtn/>
      </div>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
      
    </div>
  );
}

export default App;
