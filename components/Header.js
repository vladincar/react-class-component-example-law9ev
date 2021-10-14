import React from 'react';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? 'green' : 'red'} text="Add" onAdd={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: 'bitch',
};

export default Header;
