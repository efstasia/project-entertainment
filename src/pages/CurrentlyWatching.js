import React, { useState, useEffect } from 'react';
import { InputItem } from '../components/InputItem';

export const CurrentlyWatching = ({ setCurrentInput, currentInput }) => {
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

  const handleCompleted = id => {
    const completed = inputs.map(input => {
      return input.id === id
        ? { ...input, completed: !input.completed, inProcess: !input.inProcess }
        : { ...input };
    });
    setInputs(completed);
  };
  const handleDeleteInput = id => {
    const removeInput = inputs.filter(input => {
      return input.id !== id;
    });
    setInputs(removeInput);
  };
  const currentlyWatching = inputs.filter(
    input => input.inProcess && !input.completed
  );

  return (
    <section className='list-container '>
      <div className='toggled-list'>
        <h3>in process</h3>
        <div className='active-list'>
          {currentlyWatching && (
            <ul className='input-list'>
              {currentlyWatching.map(input => (
                <InputItem
                  key={input.id}
                  input={input}
                  onDeleteClick={handleDeleteInput}
                  onCompleteClick={handleCompleted}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
