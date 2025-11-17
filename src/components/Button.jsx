import React from 'react';

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{
    backgroundColor: '#7047EB',
    color: '#FFFFFF',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  }}>
    {children}
  </button>
);

export default Button;
