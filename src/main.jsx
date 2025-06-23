import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Watch from './watch/Watch'; // ✅ Import your Watch page
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

