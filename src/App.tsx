import React from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;