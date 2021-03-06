import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import data from './assets/data.json';

import Layout from './components/Layout';
import Destination from './pages/destination';
import DestinationItem from './components/destinationItem';
import Technology from './pages/technology';
import TechItem from './components/TechItem';
import Crew from './pages/crew';
import CrewItem from './components/CrewItem';
import Home from './pages/home';

function App() {
  const destinationsNames = data.destinations.map(destination => destination.name);
  const crewNames = data.crew.map(crewMember => crewMember.name.replaceAll(" ", "-"));
  const technologiesNames = data.technology.map(crewMember => crewMember.name.replaceAll(" ", "-"));
  
  const firstDestination = destinationsNames[0];
  const firstCrewMember = crewNames[0];
  const firstTechnology = technologiesNames[0];
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="" element={<Home />} />
              <Route 
                path="destination" 
                element={<Destination destinationsNames = { destinationsNames } />}
              >
                <Route path="" element={<Navigate to={firstDestination} replace={true} />}/>
                <Route
                  path=":destinationName"
                  element={<DestinationItem destinationsInfo={data.destinations} />}
                />
              </Route>
              <Route path="crew" element={<Crew crewNames={crewNames} />}>
                <Route path="" element={ <Navigate to={firstCrewMember} replace={ true } /> } />
                <Route path=":crewMemberName" element={ <CrewItem crewMembers={data.crew} /> } />
              </Route>
              <Route path="technology" element={<Technology technologiesNames={technologiesNames} />} >
                <Route path="" element={ <Navigate to={firstTechnology} replace={true} />} />
                <Route path=":technologyName" element={ <TechItem technologies={data.technology} />} />
              </Route>
            </Route>
        </Routes> 
      </BrowserRouter>
  );
}

export default App;
