import { React, useState } from 'react';
import "./DogList.css";

function DogList({ dogs, getDogs }) {
  const [hasDogs, setHasDogs] = useState(false);

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
        <div className="DogList-dog">
          {dog.name}
          <img src={`../${dog.src}.jpg`} />
        </div>)}
    </div>
  );
}

export default DogList;