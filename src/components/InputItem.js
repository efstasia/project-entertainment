import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const InputItem = ({
  input,
  onEditClick,
  onDeleteClick,
  onProcessClick,
  onCompleteClick,

  // inProcess,
}) => {
  return (
    <div className='list-item-container'>
      <div className='input-list-item'>
        <li key={input.id}>
          {input.text}
          <div className='button-container'>
            <button onClick={() => onDeleteClick(input.id)}>x</button>
            <button onClick={() => onEditClick(input)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            {!input.inProcess && (
              <button onClick={() => onProcessClick(input.id)}>
                <FontAwesomeIcon icon={faSpinner} />
              </button>
            )}
            {!input.complete && (
              <button onClick={() => onCompleteClick(input.id)}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
            )}

            {/* {input.category} */}
          </div>
        </li>
      </div>
    </div>
  );
};
