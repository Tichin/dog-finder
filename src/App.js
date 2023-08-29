import './App.css';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Nav from './Nav';
import RouteList from './RouteList';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';

const DOG_API_URL = 'http://localhost:5001';

/** App logic.
 *
 * Props:
 * None
 *
 * State:
 * dogs/[{name: "whiskey", ...}, {}]
 * hasDogs: false/true
 *
 * App -> BrowserRouter -> Nav {dogNames} / <RouteList {dogs} {getDogs} />
 */

function App() {
  const [dogs, setDogs] = useState([]);
  const [hasDogs, setHasDogs] = useState(false);

  // Fetch list of dogs from API + updates state
  async function getDogs() {
    const result = await axios.get(DOG_API_URL + '/dogs');
    setHasDogs(true);
    // add id to each dog
    const dogs = result.data.map(dog => ({ ...dog, id: uuid() }));
    setDogs(dogs);
  }

  if (hasDogs === false) {
    getDogs();
  }

  return (
    <div className="App">
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <Nav dogNames={dogs.map((dog) => dog.name)} />
        <RouteList dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
export { DOG_API_URL };

