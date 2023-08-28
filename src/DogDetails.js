import React from 'react';

function DogDetails({dog}) {
  return (
    //{name: 'Whiskey', age: 5, src: 'whiskey', facts: Array(3)}
    <div>
      name={dog.name},
      age={dog.age},
      <img src={dog.src} alt="" />
      facts=
        <ul>
          {dog.facts.map((fact) => <li>{fact}</li>)}
        </ul>
    </div>
  );
}

export default DogDetails;