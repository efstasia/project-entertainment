import React from 'react';

export const Header = () => {
  return (
    <div>
      <div className='header-container'>
        <h1>
          .entertain<span>ME</span>nt
        </h1>
      </div>
      <nav>
        <a href='/'>home</a>
        <a href='/movies'>movies</a>
      </nav>
    </div>
  );
};
