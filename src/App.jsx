import { useState } from 'react';
import './App.css'

function App() {

  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()
    setTasks([...tasks, e.target.taskfield.value]);

  }

  return (
    <div className='w-full h-full'>
      <form onSubmit={handleSubmit} className='w-64 m-20'>
        <input 
          type="text"
          name='taskfield'
          placeholder='Enter your text'
          className='border border-gray-300 rounded-md p-2 mb-4 w-full'
        />
        <button className='bg-blue-500 text-white p-2 rounded-md' >Add Task</button>
      </form>
      
      <div className='w-64 m-20'>
        <h2 className='text-xl font-bold mb-4'>Tasks:</h2>
        <ul className='list-disc pl-5'>
          {tasks.map((task, index) => (
            <li key={index} className='mb-2'>{task}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App
