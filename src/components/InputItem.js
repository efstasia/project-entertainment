import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faCheck,
  faSpinner,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const InputItem = ({
  input,
  onEditClick,
  onDeleteClick,
  onProcessClick,
  onCompleteClick,
}) => {
  return (
    <div className='list-item-container'>
      <div className='input-list-item'>
        <li key={input.id}>
          {input.text}
          <div className='button-container'>
            <button onClick={() => onDeleteClick(input.id)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <button onClick={() => onEditClick(input)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            {!input.inProcess && !input.completed && (
              <button onClick={() => onProcessClick(input.id)}>
                <FontAwesomeIcon icon={faSpinner} />
              </button>
            )}
            {!input.completed ? (
              <button onClick={() => onCompleteClick(input.id)}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
            ) : (
              <button onClick={() => onCompleteClick(input.id)}>undo</button>
            )}
            <span className='streaming-service'> {input.streamingService}</span>
          </div>
        </li>
      </div>
    </div>
  );
};
