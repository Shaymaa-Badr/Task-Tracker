import React, { Fragment } from 'react';
import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  // state
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [remainder, setRem] = useState(false);

  // on submit btn function
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add a task');
      return;
    }
    addTask({ text, date, remainder });
    setText('');
    setDate('');
    setRem(false);
  };
  return (
    <Fragment>
      <form className='text-capitalize mb-5' onSubmit={onSubmit}>
        <div className='form-group '>
          <label>task</label>
          <input
            className='form-control'
            type='text'
            placeholder='Add Task'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>date & time</label>
          <input
            className='form-control'
            type='text'
            placeholder='Add Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='form-group d-flex align-items-center justify-content-between'>
          <label>set remainder</label>
          <input
            width='40'
            className=''
            type='checkbox'
            checked={remainder}
            value={remainder}
            onChange={(e) => setRem(e.currentTarget.checked)}
          />
        </div>
        <input
          type='submit'
          value='Save'
          className='btn btn-block bg-white text-info'
        />
      </form>
    </Fragment>
  );
};

export default TaskForm;
