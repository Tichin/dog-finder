import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import "./DogList.css";

/** Renders individual dogs.
 *
 * Props:
 * - dogs ([{name: "whiskey", ...}, {}])
 * - getDogs(): fetches dogs' info from API
 *
 * State:
 * hasDogs: false/true
 *
 * App -> RouteList -> DogList({ dogs, getDogs })
 */

function DogList({ dogs, getDogs }) {
  const [hasDogs, setHasDogs] = useState(false);

  //fetch dogs' info from API & set state
  async function getDogList() {
    await getDogs();
    setHasDogs(true);
  }
  //TODO: handle in app

  if (hasDogs === false) {
    getDogList();
  }

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