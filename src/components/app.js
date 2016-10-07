import React, { Component } from 'react';
import PictureCalculator from './picture_calculator';
import CardSuggestor from './card_suggestor.js'
import Footer from './footer';
import About from './about'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="six columns">
            <h1><span className="orange">Memory Card</span> Helper</h1>
            <About />
            <Footer />
          </div>
          <div className="six columns calculator">
            <img className="memory-card-image" src="public/images/card.svg" />
            <PictureCalculator />
          </div>
        </div>
      </div>
    );
  }
}
