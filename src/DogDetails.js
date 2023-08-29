import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import "./DogDetails.css";

/** Details for individual dog.
 *
 * Props:
 * - dogs: list of all dogs [{name: "whiskey", ...}, {}]
 *
 * State:
 * None
 *
 * App -> RouteList -> DogDetails( {dogs } )
 */

function DogDetails({ dogs }) {
  const { name } = useParams();

  //redirects to homepage if dogs list not populated
  if (dogs.length === 0) {
    return <Navigate to='/dogs' />;
  }

  const dog = dogs.find(dog => dog.name === name);

  return (
    <div className="DogDetails">
      <p><b>Name:</b> {dog.name}</p>
      <p><b>Age:</b> {dog.age}</p>
      <img src={`../${dog.src}.jpg`} alt={dog.name} />
      <p><b>Facts:</b> </p>
      <ul className="DogDetails-facts">
        {dog.facts.map((fact, idx) => <li key={idx + 1}>{fact}</li>)}
      </ul>
    </div >
  );
}

export default DogDetails;