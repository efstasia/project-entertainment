import React, { useEffect, useState } from 'react';

import { Header } from './Header';
import { AddInputForm } from './AddInputForm';
import { InputItem } from './InputItem';
import { EditInputForm } from './EditInputForm';

export const InputForm = () => {
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentInput, setCurrentInput] = useState({});
  const [category, setCategory] = useState('');
  const [inProcess, setInProcess] = useState(false);
  const [completed, setCompleted] = useState(false);
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

  // useEffect(() => {
  //   localStorage.setItem('inProcess', JSON.stringify(inProcess));
  // }, [inProcess]);

  // useEffect(() => {
  //   localStorage.setItem('inProcess', JSON.stringify(completed));
  // }, [completed]);

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
    console.log('SUBMITTED');

    if (input !== '') {
      setInputs([
        ...inputs,
        {
          id: inputs.length + 1,
          text: input.trim(),
          category: category,
          inProcess: false,
          completed: false,
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

  const handleInProcess = id => {
    const toggled = inputs.map(input => {
      return input.id === id
        ? { ...input, inProcess: !input.inProcess }
        : { ...input };
    });
    setInputs(toggled);
    console.log('in process clicked', toggled);
  };

  const handleCompleted = id => {
    const completed = inputs.map(input => {
      return input.id === id
        ? { ...input, completed: !input.completed, inProcess: !input.inProcess }
        : { ...input };
    });
    setInputs(completed);
    console.log('completed clicked');
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
  const currentlyWatching = inputs.filter(
    input => input.inProcess && !input.completed
  );
  console.log('currently watching', currentlyWatching);

  const complete = inputs.filter(input => input.completed);

  return (
    <>
      <Header />
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
              handleInput={handleInput}
              onFormSubmit={handleFormSubmit}
              handleSelectMenu={handleSelectMenu}
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
      </section>
      <section className='toggled-list'>
        <div>
          <h3>in process</h3>
          {currentlyWatching.length > 0 && (
            <ul className='input-list'>
              {currentlyWatching.map(input => (
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
          <h3>completed</h3>
          <div className='completed-list'>
            {complete.length > 0 && (
              <ul className='input-list'>
                {complete.map(input => (
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
      </section>
    </>
  );
};
