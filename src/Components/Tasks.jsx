import React, { Fragment } from 'react';
import Task from './Task';

function Tasks({ tasks, deleteTask, toggle}) {
  return (
    <Fragment>
      {tasks.map((task, i) => (
        <Task key={i} task={task} deleteTask={deleteTask} toggle={toggle} />
      ))}
    </Fragment>
  );
}

export default Tasks;
