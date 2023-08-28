import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import "./DogList.css";

function DogList({ dogs, getDogs }) {
  const [hasDogs, setHasDogs] = useState(false);

  console.log('in Doglist dogs=', dogs);
  async function getDogList() {
    await getDogs();
    setHasDogs(true);
  }

  if (hasDogs === false) {
    getDogList();
  }
  //dogs = [{name: 'Whiskey', age: 5, src: 'whiskey', facts: Array(3)}, {}...}]
  return (
    <div className="DogList">
      {dogs.map((dog) =>
        <div className="DogList-dog" key={dog.id}>
          {dog.name}
          <Link to={`/dogs/${dog.name}`}>
            <img src={`../${dog.src}.jpg`} alt={dog.name} />
          </Link>
        </div>)}
    </div>
  );
}

export default DogList;