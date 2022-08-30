import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

import { AddInputForm } from './AddInputForm';
import { InputItem } from './InputItem';
import { EditInputForm } from './EditInputForm';

export const InputForm = () => {
  const [input, setInput] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentInput, setCurrentInput] = useState({});
  const [category, setCategory] = useState('');
  const [streamingService, setStreamingService] = useState('');
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
  };

  const handleSelectMenu = e => {
    setCategory(e.target.value);
  };

  const handleEditChange = e => {
    setCurrentInput({
      ...currentInput,
      text: e.target.value,
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (input !== '') {
      setInputs([
        ...inputs,
        {
          id: inputs.length + 1,
          text: input.trim(),
          category,
          inProcess: false,
          completed: false,
          streamingService,
          currentInput,
        },
      ]);
    }
    setInput('');
    setCategory('');
    setStreamingService('');
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

  const handleDeleteInput = id => {
    const removeInput = inputs.filter(input => {
      return input.id !== id;
    });
    setInputs(removeInput);
  };

  const handleEditClick = input => {
    setIsEditing(true);
    setCurrentInput({ ...input });
  };

  const handleInProcess = id => {
    const toggled = inputs.map(input => {
      return input.id === id
        ? { ...input, inProcess: !input.inProcess }
        : { ...input };
    });
    setInputs(toggled);
  };

  const handleCompleted = id => {
    const completed = inputs.map(input => {
      return input.id === id
        ? { ...input, completed: !input.completed, inProcess: !input.inProcess }
        : { ...input };
    });
    setInputs(completed);
  };

  const handleStreamingService = e => {
    setStreamingService(e.target.value);
  };

  const shows = inputs.filter(
    input => input.category === 'show' && !input.inProcess && !input.completed
  );
  const movies = inputs.filter(
    input => input.category === 'movie' && !input.inProcess && !input.completed
  );
  const games = inputs.filter(
    input => input.category === 'game' && !input.inProcess && !input.completed
  );

  return (
    <>
      <div>
        {isEditing ? (
          <EditInputForm
            currentInput={currentInput}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
        ) : (
          <div className='input-entry'>
            <AddInputForm
              input={input}
              category={category}
              handleInput={handleInput}
              onFormSubmit={handleFormSubmit}
              handleSelectMenu={handleSelectMenu}
              handleStreamingService={handleStreamingService}
            />
          </div>
        )}
      </div>
      <section className='list-container'>
        <div className='list-contents'>
          <div>
            <h3>shows</h3>
            {shows.length > 0 && (
              <ul className='input-list'>
                {shows.map(input => (
                  <InputItem
                    key={input.id}
                    input={input}
                    onEditClick={handleEditClick}
                    onDeleteClick={handleDeleteInput}
                    onProcessClick={handleInProcess}
                    onCompleteClick={handleCompleted}
                  />
                ))}
              </ul>
            )}
          </div>

          <div>
            <h3>movies</h3>
            {movies.length > 0 && (
              <ul className='input-list'>
                {movies.map(input => (
                  <InputItem
                    key={input.id}
                    input={input}
                    onEditClick={handleEditClick}
                    onDeleteClick={handleDeleteInput}
                    onProcessClick={handleInProcess}
                    onCompleteClick={handleCompleted}
                  />
                ))}
              </ul>
            )}
          </div>

          <div>
            <h3>games</h3>
            {games.length > 0 && (
              <ul className='input-list'>
                {games.map(input => (
                  <InputItem
                    key={input.id}
                    input={input}
                    onEditClick={handleEditClick}
                    onDeleteClick={handleDeleteInput}
                    onProcessClick={handleInProcess}
                    onCompleteClick={handleCompleted}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='empty-list'>
          {games.length === 0 && shows.length === 0 && movies.length === 0 && (
            <div>
              <h2>
                nothing added yet <FontAwesomeIcon icon={faClapperboard} />
              </h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
