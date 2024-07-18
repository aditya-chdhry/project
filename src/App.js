import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage.jsx';
import InstructorSection from './components/Instructorsec.jsx';
import Relatedsec from './components/Relatedsec.jsx';
import Sidebar from './components/Sidebar.jsx';
import Videosection from './components/Videosection.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <InstructorSection/>
        <Relatedsec/>
        <Sidebar/>
        <Videosection/>
        <App/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* Add routes for other pages here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
