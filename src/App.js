import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfe from './components/venueNfe';
import Highlights from './components/highilghts';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "orange" }}>
        <Header />
        <Featured />
        <VenueNfe />
        <Highlights />
      </div>
    );
  }
}

export default App;
