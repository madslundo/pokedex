import React from 'react';
import Main from './Components/Main';
import About from './Components/About';
import Navbar from './Components/Navbar';
import './Components/style.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/About">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
