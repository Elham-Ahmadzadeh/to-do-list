import React, {FC} from 'react';
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
        <input placeholder='Task...'/>
        <input type="number" placeholder='Deadline(in Days)'/>
        </div>
        <button>Add Task</button>
      </div>
      <div className='toDoList'></div>
    </div>
  );
}

export default App;
