import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import HomePage from './pages/homePage/homePage';
import AboutPage from './pages/aboutPage/aboutPage';
import BrotherPage from './pages/brotherPage/brotherPage';

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
          <Header />
          <div className='content'>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/brothers' component={BrotherPage} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
