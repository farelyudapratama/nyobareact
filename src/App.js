import React, { useState } from 'react';
import { Navbar, Home, Gallery, About, Footer } from './components';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  function changePage(newPage) {
    setPage(newPage);
  }
  return (
    <div className="App">
      <Navbar changePage={changePage} />
      {page == 'home' && <Home />}
      {page == 'gallery' && <Gallery />}
      {page == 'about' && <About />}
      <Footer />
    </div>
  );
}

export default App;
