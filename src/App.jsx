import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Adjust timing for the new preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 9000); // Increased to accommodate the new animation sequence

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
          <Header />
          <main>
            <Home />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;