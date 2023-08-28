import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

function RouteList(dogs, getDogs) {
  return (
    <Routes>
      <Route element={<DogList />} path="/dogs" />
      <Route element={<DogDetails dog={dogs[0]}/>} path="/dogs/:name" />
    </Routes>
  );
}

export default RouteList;