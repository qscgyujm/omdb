import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from '../Component/Main/Main';
import {
  BrowserRouter as Router, HashRouter
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HashRouter>
          <Main />
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
