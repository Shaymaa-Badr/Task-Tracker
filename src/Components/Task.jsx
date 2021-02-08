import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Task({ task, deleteTask, toggle }) {
  return (
    <div
      className={`px-3 my-2 rounded ${task.remainder ? 'remainder' : ''}`}
      style={{ backgroundColor: '#92dcdf38' }}
      onDoubleClick={() => toggle(task.id)}
    >
      <h5 className='text-capitalize d-flex justify-content-between pt-3'>
        {task.text}
        <FaTimes
          style={{ color: '#fff', cursor: 'pointer' }}
          onClick={() => deleteTask(task.id)}
        />
      </h5>
      <p className='pb-2'>{task.date}</p>
    </div>
  );
}

export default Task;
