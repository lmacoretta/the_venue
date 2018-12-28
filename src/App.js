import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfe from './components/venueNfe';
import Highlights from './components/highilghts';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "orange" }}>
        <Header />

        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venueinfo">
          <VenueNfe />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>


        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
