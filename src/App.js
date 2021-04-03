import React, { Component } from 'react';
import './App.css';
import People from './components/PeopleComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
            <People/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
