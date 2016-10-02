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
      <div className="result-section">
        <p>Number of pictures you could store:<br />
            <span className="result">{this.props.numberOfPictures}</span>
        </p>
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
