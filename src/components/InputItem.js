import React from 'react';

export const InputItem = ({ input, onEditClick, onDeleteClick }) => {
  return (
    <div>
      <div className='input-list-item'>
        <li key={input.id}>
          {input.text}
          <button onClick={() => onDeleteClick(input.id)}>
            <i class='fa-solid fa-trash-can'></i>
          </button>
          <button onClick={() => onEditClick(input)}>Edit</button>
          {input.category}
        </li>
      </div>
    </div>
  );
};
