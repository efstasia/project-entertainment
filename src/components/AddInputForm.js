import React from 'react';

export const AddInputForm = ({
  input,
  onFormSubmit,
  handleInput,
  handleSelectMenu,
}) => {
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          value={input}
          onChange={handleInput}
          name='inputs'
          placeholder='enter title here..'
        />
        <select onChange={handleSelectMenu} defaultValue='default'>
          <option disabled value={'default'}>
            pick category here
          </option>
          <option value='show'>tv-show</option>
          <option value='movie'>movie</option>
          <option value='game'>game</option>
        </select>
        <button className='add-button' type='submit'>
          add
        </button>
      </form>
    </section>
  );
};
