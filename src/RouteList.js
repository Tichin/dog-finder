import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

/** App routes.
 *
 * Props:
 * - dogs: list of all dogs [{name: "whiskey", ...}, {}]
 *
 * State:
 * None
 *
 * App -> RouteList ->
 *    <DogList {dogs} {getDogs} />,
 *    <DogDetails {dogs} />,
 *    <Navigate to="/dogs" />
 */

function RouteList({ dogs }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      <Route path="*" element={<Navigate to='/dogs' />} />
    </Routes>
  );
}

export default RouteList;