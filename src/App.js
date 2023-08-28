import './App.css';
import axios from 'axios';
import Nav from './Nav';
import RouteList from './RouteList';
import DogList from './DogList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {

  const [dogs, setDogs] = useState([]);

  async function getDogs() {
    const result = await axios.get('http://localhost:5001/dogs');
    setDogs(result.data);
  }

  return (
    <div className="App">
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} getDogs={getDogs}/>}/>
        {/* <Route path="/dogs/:name" element={<DogDetails dog={dog}/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import dukeImage from '../public/duke.jpg';
// import perryImage from '../public/perry.jpg';
// import whiskeyImage from '../public/whiskey.jpg';


// const DEFAULT_DOGS = [{
//   id: 1,
//   name: 'Duke',
//   img: '../public/duke.jpg'
// }, {
//   id: 2,
//   name: 'Perry',
//   img: '../public/perry.jpg'
// }, {
//   id: 3,
//   name: 'Whiskey',
//   img: '../public/whiskey.jpg'
// }];

// const DEFAULT_DOGS_NAMES = ['Duke', 'Perry', 'Whiskey'];