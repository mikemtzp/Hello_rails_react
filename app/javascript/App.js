import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting'

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
    </Router>
  );
}