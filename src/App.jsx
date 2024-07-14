
import './App.css'
import React from 'react';
import LandingPage from './components/LandingPage'; // Import the LandingPage component

import { useState } from 'react'; // Import useState hook
import DiabetesForm from './components/DiabetesForm'; // Adjusted the path to match project structure


function App() {
 
  return (
    <>
      <div>
        <h1 className="heading" >Diabetes Prediction</h1>
        <DiabetesForm />
      </div>
      
      <div>
        <LandingPage /> {/* Render the LandingPage component */}
      </div>
    </>
  );
}

export default App;
