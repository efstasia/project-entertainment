import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faCheck,
  faTrashCan,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

export const InputItem = ({
  input,
  onEditClick,
  onDeleteClick,
  onProcessClick,
  onCompleteClick,
}) => {
  const [rating, setRating] = useState(0); // initial rating value
  const handleRating = rate => {
    setRating(rate);
    // other logic
  };

  return (
    <div className='list-item-container'>
      <div className='input-list-item'>
        <li key={input.id}>
          <span className='input-text'>{input.text}</span>
          <div className='button-container'>
            <button
              className='list-icons'
              onClick={() => onDeleteClick(input.id)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            {!input.inProcess ? (
              <button className='list-icons' onClick={() => onEditClick(input)}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            ) : (
              ''
            )}

            {!input.inProcess && !input.completed && (
              <button
                className='list-icons'
                onClick={() => onProcessClick(input.id)}
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
            )}
            {!input.completed ? (
              <button
                className='list-icons'
                onClick={() => onCompleteClick(input.id)}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
            ) : (
              <button
                className='list-icons'
                onClick={() => onCompleteClick(input.id)}
              >
                undo
              </button>
            )}
            {input.streamingService ? (
              <span className='streaming-service'>
                {' '}
                {input.streamingService}
              </span>
            ) : (
              <span className='streaming-service'> game</span>
            )}
          </div>
          {input.completed && (
            <span className='rating'>
              <Rating
                onClick={handleRating}
                ratingValue={rating} /* Available Props */
                size='18'
                fillColor='#cdbe78'
              />
            </span>
          )}
        </li>
      </div>
    </div>
  );
};
