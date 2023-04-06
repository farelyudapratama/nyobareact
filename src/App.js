import React, { useState } from 'react';
import { Navbar, Home, Gallery, About, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}

export default App;
