import React from 'react';
import './App.css';

import LightRays from './components/LightRays/LightRays';

let rohitImg = 'https://res.cloudinary.com/doapnwi6d/image/upload/v1764350902/rohit_om4iur.svg';

function App() {
  return (
    <div className="App">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={0.5}
        pulsating={true}
        fadeDistance={0.5}
        saturation={1.0}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.0}
        distortion={0.0}
      />
      <img src={rohitImg} alt="Rohit" className="rohit-image" />
      <h1 className="name">Rohithraj</h1>
    </div>
  );
}

export default App;