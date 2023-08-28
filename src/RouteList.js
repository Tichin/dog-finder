import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

function RouteList({ dogs, getDogs }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} getDogs={getDogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      <Route path="*" element={<Navigate to='/dogs' />} />
    </Routes>
  );
}

export default RouteList;