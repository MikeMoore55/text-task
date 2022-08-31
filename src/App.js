import react from 'react';
import './App.css';
import Header from './components/Header';
import AddBtn from './components/AddBtn';
import SortBtn from './components/SortBtn';

function App() {
  return (
    <div className='App'>
      <Header/>
      <div className='btns-container'>
        <AddBtn btnText={'Add'}/> 
        <SortBtn/>
      </div>
      
    </div>
  );
}

export default App;
