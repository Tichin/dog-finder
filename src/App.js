import './App.css';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Nav from './Nav';
import RouteList from './RouteList';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';

const DOG_API_URL = 'http://localhost:5001';

function App() {

  const [dogs, setDogs] = useState([]);

  async function getDogs() {
    const result = await axios.get(DOG_API_URL + '/dogs');

    // add id to each dog
    const dogs = result.data.map(dog => ({ ...dog, id: uuid() }));

    console.log('in App dogs=', dogs);
    setDogs(dogs);
  }

  return (
    <div className="App">
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <Nav />
        <RouteList dogs={dogs} getDogs={getDogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;

