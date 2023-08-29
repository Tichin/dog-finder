import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const DEFAULT_DOGS_NAMES = ['Duke', 'Perry', 'Whiskey'];

/** Nav element.
 *
 * Props:
 * - dogNames: currently set to DEFAULT_DOGS_NAMES
 *
 * State:
 * None
 *
 * App -> Nav -> <Link to="/dogs/dogName" />
 */

//TODO: change key
function Nav({ dogsNames = DEFAULT_DOGS_NAMES }) {
  return (
    <div className='Nav'>
      {dogsNames.map((dogName, index) =>
        <Link
          to={`/dogs/${dogName}`}
          className='Nav-link'
          key={index}>
          {dogName}
        </Link>)}
    </div>
  );
}

export default Nav;