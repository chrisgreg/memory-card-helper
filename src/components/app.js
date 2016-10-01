import React, { Component } from 'react';
import CalculatorForm from './calculator_form';
import CalculatorResult from './calculator_result';

export default class App extends Component {
  render() {
    return (
      <div>
          <h1>Mem Card Helper</h1>
          <div>
            <h2>Calculate number of pictures a memory card could store:</h2>
            <CalculatorForm />
            <CalculatorResult />
          </div>
      </div>
    );
  }
}
