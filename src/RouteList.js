import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

/** App routes.
 *
 * Props:
 * - dogs: list of all dogs [{name: "whiskey", ...}, {}]
 * - getDogs(): fetches dogs' info from API
 *
 * State:
 * None
 *
 * App -> RouteList ->
 *    <DogList {dogs} {getDogs} />,
 *    <DogDetails {dogs} />,
 *    <Navigate to="/dogs" />
 */

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