import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { name } = useParams();

  if (dogs.length === 0) {
    return <Navigate to='/dogs' />;
  }
  const dog = dogs.find(dog => dog.name === name);
  // console.log('in DogDetails dog=', dog);




  return (
    //{name: 'Whiskey', age: 5, src: 'whiskey', facts: Array(3)}
    < div >
      <p>name={dog.name}</p>
      <p>age = {dog.age}</p>
      <img src={`../${dog.src}.jpg`} alt={dog.name} />
      <p>facts =</p>
      <ul>
        {dog.facts.map((fact) => <li >{fact}</li>)}
      </ul>
    </div >
  );
}

export default DogDetails;