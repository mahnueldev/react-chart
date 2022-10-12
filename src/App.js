import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';


const App = () => {

  return (
   
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
    
  );
}

export default App;
