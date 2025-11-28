import React from 'react';
import './App.css';

import LightRays from './components/LightRays/LightRays';

function App() {
  return (
    <div className="App">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={1}
        rayLength={2}
        pulsating={false}
        fadeDistance={1.0}
        saturation={1.0}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.0}
        distortion={0.0}
      />
      <img src="/rohit.svg" alt="Rohit" className="rohit-image" />
      <h1 className="name">Rohithraj</h1>
    </div>
  );
}

export default App;