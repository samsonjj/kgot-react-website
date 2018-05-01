import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import Header from './components/header/header';
import Header2 from './components/header2/header';
import HomePage from './components/pages/homePage';
import AboutPage from './components/pages/aboutPage';
import Footer from './components/footer/footer';

// css
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router className="App">
        <div className='container-thing'>
          <Header2 />
          <div className='content'>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
