import { useEffect, useState } from 'react';
import './App.css'
import Task from './components/Task';

function App() {

  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()
    const newTask = {
      id: tasks.length,
      taskName: e.target.taskfield.value,
      status: false
    }
    const newTaskArray = [...tasks, newTask];
    setTasks(newTaskArray);
    saveToLocalStorage(newTaskArray);
  }
  
  function markTaskDone(id){
    console.log('Task with id', id)
    const newTaskArray = tasks.map((t) => {
      if(t.id === id){
        return {...t, status: true}
      }
      return t;
    })
    setTasks(newTaskArray);
    saveToLocalStorage(newTaskArray);
  }

  function saveToLocalStorage(taskArray){
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  }

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if(savedTasks){
      setTasks(JSON.parse(savedTasks));
    }
  }, [])

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
        <div className="">
          {tasks.map((task, index) => (
            // <li key={index} className='mb-2'>{task.taskName}</li>
            <Task key={index} t={task} doneFunction={markTaskDone}/>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App
