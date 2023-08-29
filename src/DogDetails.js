import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import "./DogDetails.css";

/** Renders individual dog.
 *
 * Props:
 * - dog: data for individual dog {name: "whiskey", ...}
 *
 * State:
 * None
 *
 * App -> RouteList -> DogData -> DogDetails( {dog } )
 */

function DogDetails({ dog }) {
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