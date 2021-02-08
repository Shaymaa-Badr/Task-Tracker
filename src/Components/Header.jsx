import React from 'react';
import Button from './Button';
import propTypes from 'prop-types';

function Header({ title, showAdd, onAdd }) {
  return (
    <header className='d-flex align-items-center text-capitalize justify-content-between'>
      <h1 className='text-capitalize'>{title}</h1>
      <Button
        color={showAdd ? 'rgb(138, 68, 68)' : 'rgb(230, 168, 168)'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
}
Header.defaultProps = {
  title: 'task tracker',
};
Header.propTypes = {
  title: propTypes.string.isRequired,
};
export default Header;
