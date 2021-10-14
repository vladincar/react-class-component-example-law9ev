import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  const [showAddTask,setShowAddTask]=useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appoin tment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Sex with bear',
      day: 'March 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shit in bed',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);
  //Show add task


// Add task
const addTask=(task)=>{
  task.id=tasks.length+1;
  setTasks([...tasks,task])
}

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((x) => x.id != id));
  };

  //Change reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((x) => (x.id === id ? { ...x, reminder: !x.reminder } : x))
    );
  };

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask&&<AddTask onAdd={addTask}/>}
      {tasks.length == 0 ? (
        'No Tasks'
      ) : (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      )}
    </div>
  );
}

export default App;
