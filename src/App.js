
import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home/>} />
          <Route exact path = "/Login" element = {<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
