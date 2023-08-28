import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

function RouteList() {
  return (
    <Routes>
      <Route element={<DogList />} path="/" />
      <Route element={<DogDetails />} path="/dogs/:name" />
    </Routes>
  );
}

export default RouteList;