import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const DEFAULT_DOGS_NAMES = ['Duke', 'Perry', 'Whiskey'];


function Nav({ dogsNames = DEFAULT_DOGS_NAMES }) {
  return (
    <div className='Nav'>
      {dogsNames.map((dogName, index) =>
        <Link
          className='Nav-link'
          key={index}>
          {dogName}
        </Link>)}
    </div>
  );
}

export default Nav;