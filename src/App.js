import React  from "react";
import {Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import {Home, Destination, DestinationMoon, DestinationMars, 
    DestinationEuropa, DestinationTitan, Crew, Technology} from './Pages/index'


function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact={true} path='/' element={<Home/>}></Route>
          <Route exact={true} path='/destination' element={<Destination/>}>
            <Route  index path='moon' element={<DestinationMoon/>}/>
            <Route  path='mars' element={<DestinationMars/>}/>
            <Route  path='europa' element={<DestinationEuropa/>}/>
            <Route  path='titan' element={<DestinationTitan/>}/>
          </Route>
          <Route exact={true} path='crew' element={<Crew/>}></Route>
          <Route exact={true} path='technology' element={<Technology/>}></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
