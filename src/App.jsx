import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
