import React, { useState, useEffect } from 'react';

import { InputItem } from '../components/InputItem';

export const Completed = ({ id, input }) => {
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

  const handleInProcess = id => {
    const toggled = inputs.map(input => {
      return input.id === id
        ? { ...input, inProcess: !input.inProcess }
        : { ...input };
    });
    setInputs(toggled);
  };

  const complete = inputs.filter(input => input.completed);

  return (
    <section className='list-container '>
      <div className='toggled-list'>
        <h3>completed</h3>
        <div className='completed-list'>
          {complete && (
            <ul className='input-list'>
              {complete.map(input => (
                <InputItem
                  key={input.id}
                  id={id}
                  input={input}
                  onDeleteClick={handleDeleteInput}
                  handleInProcess={handleInProcess}
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
