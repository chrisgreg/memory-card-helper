import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateNumberOfPictures } from '../actions/index'

class CalculatorResult extends Component {

  componentWillMount() {
    this.calculateNewPictures();
  }

  calculateNewPictures() {
    this.props.calculateNumberOfPictures();
  }

  render() {
    return (
      <div>
        <p>Number of pictures you could store: {this.props.numberOfPictures}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    numberOfPictures: state.calculator.numberOfPictures
  }
}

export default connect (mapStateToProps, { calculateNumberOfPictures })(CalculatorResult);
