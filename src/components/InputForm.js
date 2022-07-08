import React, { useEffect, useState } from 'react';

import { Category } from './Category';
import { AddInputForm } from './AddInputForm';
import { InputItem } from './InputItem';
import { EditInputForm } from './EditInputForm';

export const InputForm = () => {
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentInput, setCurrentInput] = useState({});
  const [category, setCategory] = useState('');
  const [inputs, setInputs] = useState(() => {
    const savedInputs = localStorage.getItem('inputs');
    if (savedInputs) {
      return JSON.parse(savedInputs);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('inputs', JSON.stringify(inputs));
  }, [inputs]);

  const handleInput = e => {
    setInput(e.target.value);
    console.log('INPUT TEXT:', e.target.value);
  };

  const handleSelectMenu = e => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const handleEditChange = e => {
    setCurrentInput({ ...currentInput, text: e.target.value });
    console.log(currentInput);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('SUBMTTED');

    if (input !== '') {
      setInputs([
        ...inputs,
        {
          id: inputs.length + 1,
          text: input.trim(),
          category: category,
        },
      ]);
    }
    setInput('');
  };

  const handleEditFormSubmit = e => {
    e.preventDefault();
    handleUpdateInput(currentInput.id, currentInput);
  };

  const handleUpdateInput = (id, updatedInput) => {
    const updatedItem = inputs.map(input => {
      return input.id === id ? updatedInput : input;
    });
    setIsEditing(false);
    setInputs(updatedItem);
  };

  const handleDeleteInput = () => {
    const refactoredItemId = inputs.filter((input, index) => {
      return (input.id = index);
    });
    setInputs(refactoredItemId);
  };

  const handleEditClick = input => {
    setIsEditing(true);
    setCurrentInput({ ...input });
  };

  const shows = inputs.filter(input => input.category === 'show');
  const movies = inputs.filter(input => input.category === 'movie');
  const games = inputs.filter(input => input.category === 'game');

  return (
    <>
      <div>
        <h1>entertainMEnt</h1>
        {isEditing ? (
          <EditInputForm
            currentInput={currentInput}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
        ) : (
          <div>
            <AddInputForm
              input={input}
              handleInput={handleInput}
              onFormSubmit={handleFormSubmit}
              handleSelectMenu={handleSelectMenu}
            />
          </div>
        )}
      </div>
      <section className='list-container'>
        <div>
          <ul className='input-list'>
            {shows.map(input => (
              <InputItem
                input={input}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteInput}
              />
            ))}
          </ul>
        </div>
        <div>
          <ul className='input-list'>
            {movies.map(input => (
              <InputItem
                input={input}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteInput}
              />
            ))}
          </ul>
        </div>
        <div>
          <ul className='input-list'>
            {games.map(input => (
              <InputItem
                input={input}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteInput}
              />
            ))}
          </ul>
        </div>
      </section>
      {/* 
      <div>
        {shows.length > 0 && (
          <ul>
            {shows.map(input => (
              <InputItem
                input={input}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteInput}
              />
            ))}
          </ul>
        )}
      </div>
      <div>
        {games.length > 0 && (
          <ul>
            {shows.map(input => (
              <InputItem
                input={input}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteInput}
              />
            ))}
          </ul>
        )}
      </div>
      <div>
        {movies.length > 0 && (
          <ul>
            {shows.map(input => (
              <InputItem
                input={input}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteInput}
              />
            ))}
          </ul>
        )}
      </div> */}
    </>
  );
};
