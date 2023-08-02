import React from 'react';
import Hero from './components/Hero';
import Demo from './components/Demo';
import './App.css';

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
      <p className="text-center font-medium">Created with ❤️ by Anna Li</p>
    </main>
  );
};

export default App;
