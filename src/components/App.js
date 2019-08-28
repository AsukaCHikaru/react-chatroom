import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import LayoutComponent from "./LayoutComponent";

import '../style/App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <LayoutComponent />
      </div>
    </Router>
  );
}

export default App;
