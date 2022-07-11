import React from 'react';

export const EditInputForm = ({
  currentInput,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) => {
  return (
    <form onSubmit={onEditFormSubmit}>
      <label htmlFor='updateTodo'>Update todo </label>
      <input
        name='updateTodo'
        type='text'
        placeholder='Update'
        value={currentInput.text}
        onChange={onEditInputChange}
      />
      <button className='add-button' type='submit' onClick={onEditFormSubmit}>
        Update
      </button>
      <button className='add-button' onClick={() => setIsEditing(false)}>
        Cancel
      </button>
    </form>
  );
};
