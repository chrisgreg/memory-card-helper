import React, { Component } from 'react';
import CalculatorForm from './calculator_form';
import CalculatorResult from './calculator_result';
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
            <h5>Calculate the number of pictures a memory card could store:</h5>
            <CalculatorForm />
            <CalculatorResult />
          </div>
        </div>
      </div>
    );
  }
}
