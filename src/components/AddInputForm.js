import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const AddInputForm = ({
  input,
  category,
  onFormSubmit,
  handleInput,
  streamingService,
  handleSelectMenu,
  handleStreamingService,
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
        {category !== 'game' && (
          <select
            value={streamingService}
            onChange={handleStreamingService}
            defaultValue='default'
          >
            <option disabled value={'default'}>
              pick streaming service
            </option>
            <option value='netflix'>netflix</option>
            <option value='HBO'>HBO</option>
            <option value='viaplay'>viaplay</option>
            <option value='prime'>prime</option>
            <option value='hayu'>hayu</option>
            <option value='4play'>tv4play</option>
            <option value='svt'>svtplay</option>
            <option value='discovery'>discovery+</option>
            <option value='unknown'>unknown</option>
          </select>
        )}
        <button className='add-button' type='submit'>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </section>
  );
};
