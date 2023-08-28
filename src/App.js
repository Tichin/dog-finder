import './App.css';
import axios from 'axios';
import Nav from './Nav';
import RouteList from './RouteList';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';

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

function App() {


  const [dogs, setDogs] = useState({});

  async function getDogs() {

    const result = await axios.get('http://localhost:5001/dogs');

    console.log('result.data =', result.data);

  }

  getDogs();

  return (
    <div className="App">
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <Nav />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
