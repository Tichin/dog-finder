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
 * dogs/[] //TODO: illustrate
 *
 * App -> BrowserRouter -> Nav {dogNames} / <RouteList {dogs} {getDogs} />
 */

function App() {

  const [dogs, setDogs] = useState([]);

  // Fetch list of dogs from API + updates state
  async function getDogs() {
    const result = await axios.get(DOG_API_URL + '/dogs');

    // add id to each dog
    const dogs = result.data.map(dog => ({ ...dog, id: uuid() }));
    setDogs(dogs);
  }

  return (
    <div className="App">
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <Nav dogNames={dogs.map((dog) => dog.name)}/>
        <RouteList dogs={dogs} getDogs={getDogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
export {DOG_API_URL};

