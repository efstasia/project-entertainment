import React, { useState, useEffect } from 'react';

import { InputItem } from '../components/InputItem';

export const Completed = () => {
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
    console.log('completed clicked');
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
    console.log('in process clicked', toggled);
  };

  const complete = inputs.filter(input => input.completed);
  console.log('INPUTS', inputs);

  return (
    <section className='list-container watch-list'>
      <div className='toggled-list'>
        <h3>completed</h3>
        <div className='completed-list'>
          <ul className='input-list'>
            {complete.map(input => (
              <div>
                <InputItem
                  key={input.id}
                  input={input}
                  onDeleteClick={handleDeleteInput}
                  handleInProcess={handleInProcess}
                  onCompleteClick={handleCompleted}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
