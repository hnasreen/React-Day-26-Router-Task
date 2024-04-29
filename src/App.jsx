import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 

import FullStack from './Components/FullStack';
import DataScience from './Components/DataScience';
import CyberSecurity from './Components/CyberSecurity';
import Career from './Components/Career';
import Home from './Components/Home';

// Define your routes using BrowserRouter
const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">ALL</Link>
                </li>
                <li className="nav-item">
                  <Link to="/full-stack" className="nav-link">FULL STACK DEVELOPMENT</Link>
                </li>
                <li className="nav-item">
                  <Link to="/data-science" className="nav-link">DATA SCIENCE</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cyber-security" className="nav-link">CYBER SECURITY</Link>
                </li>
                <li className="nav-item">
                  <Link to="/career" className="nav-link">CAREER</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        {/* Routes */}
        <div className="container mt-5"> {/* Add margins to separate Navbar from content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/full-stack" element={<FullStack />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;