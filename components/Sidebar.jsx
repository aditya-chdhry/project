import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Contents</h2>
      <ul>
        <li><Link to="/">Introduction</Link></li>
        <li><Link to="/creating-microservices">1. Introduction to Microservices</Link></li>
        <li><Link to="/creating-microservices">2. Hands on: Creating Microservices with ASP.net Core</Link></li>
        <li><Link to="/synchronous-communication">3. Hands on: Synchronous Communication between Microservices</Link></li>
        <li><Link to="/devops">4. Microservices and DevOps</Link></li>
        <li><Link to="/containerisation">5. Microservices Containerisation with Docker</Link></li>
        <li><Link to="/deployment">6. Microservices Deployment</Link></li>
        <li><Link to="/conclusion">Conclusion</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
