import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoDemo from './components/VideoDemo';
import Installation from './components/Installation';
import ConnectVM from './components/ConnectVM';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <VideoDemo />
      <Installation />
      <ConnectVM />
      <Footer />
    </div>
  );
}

export default App;
