import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DogDetails from './DogDetails';

/** Isolates data for individual dog.
 *
 * Props:
 * - dogs: data for all dogs [{name: "whiskey", ...}, {}]
 *
 * State:
 * None
 *
 * App -> RouteList -> DogData( { dogs } ) -> DogDetails( {dog } )
 */

function DogData({ dogs }) {
  const { name } = useParams();

  //redirects to homepage if dogs list not populated
  if (dogs.length === 0) {
    return <Navigate to='/dogs' />;
  }

  const dog = dogs.find(dog => dog.name === name);

  return (<DogDetails dog={dog} /> );
}

export default DogData;