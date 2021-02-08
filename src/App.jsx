import React, { Fragment } from 'react';
import Header from './Components/Header.jsx';
import Tasks from './Components/Tasks.jsx';
import { useState } from 'react';
import AddTask from './Components/AddTask.jsx';
// import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  //  How to use the state in a function using React
  //  tasks for loop and setTasks for the amendment like
  //  pushing data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dental clinic appointment',
      date: '25 Feb 12:30 am',
    },
    {
      id: 2,
      text: 'React course',
      date: '26 Feb 07:30 pm',
    },
    {
      id: 3,
      text: 'Node.js training project',
      date: '03 Mae 5:30 pm',
    },
    {
      id: 4,
      text: 'Bank Deposit',
      date: '9 Mar 09:30 am',
    },
  ]);
  // Add a new task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Toggle remainder
  const toggleRemainder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      )
    );
  };
  return (
    <Fragment>
      <div className='container py-2 d-flex align-items-center justify-content-center'>
        <div
          className='p-4'
          style={{ width: '600px', border: '2px solid #ddd' }}
        >
          <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
          {showAddTask && <AddTask addTask={addTask} />}

          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              deleteTask={deleteTask}
              toggle={toggleRemainder}
            />
          ) : (
            'No tasks to show'
          )}
        </div>
      </div>
    </Fragment>
  );
};
export default App;
