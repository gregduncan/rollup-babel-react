import React from 'react';

export const Example = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
};