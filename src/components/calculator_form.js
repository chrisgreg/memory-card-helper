import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changeType,
  changeResolution,
  changeMemoryCardSize,
  calculateNumberOfPictures
} from '../actions/index';

class CalculatorForm extends Component {

  changeType(e) {
    const type = e.target.value;
    this.props.changeType(type);
    this.calculateNewPictures();
  }

  changeResolution(e){
    const resolution = e.target.value;
    this.props.changeResolution(resolution);
    this.calculateNewPictures();
  }

  changeMemoryCardSize(e) {
    const cardSize = e.target.value;
    this.props.changeMemoryCardSize(cardSize);
    this.calculateNewPictures();
  }

  calculateNewPictures() {
    this.props.calculateNumberOfPictures();
  }

  render() {
    return (
      <div>
        <form>

          <div className="inputs">
            <div className="input-group">
              <label>
                Picture Type
              </label>
              <select onChange={this.changeType.bind(this)}>
                <option value="RAW">RAW</option>
                <option value="JPEG">JPEG</option>
              </select>
            </div>

            <div className="input-group">
              <label>
                Memory Card Size
              </label>
              <select onChange={this.changeMemoryCardSize.bind(this)}>
                <option value="1">1GB</option>
                <option value="2">2GB</option>
                <option value="4">4GB</option>
                <option value="8">8GB</option>
                <option value="16">16GB</option>
                <option value="32">32GB</option>
                <option value="64">64GB</option>
                <option value="128">128GB</option>
                <option value="256">256GB</option>
              </select>
            </div>
          </div>
          <div className="inputs">
            <div className="input-group">
              <label>
                Image Resolution (Megapixels)
              </label>
              <input type="number" placeholder={1} onChange={this.changeResolution.bind(this)}/> MP
            </div>
          </div>

        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    values: state.calculator.values
  }
}

export default connect(mapStateToProps, {
  changeType,
  changeResolution,
  changeMemoryCardSize,
  calculateNumberOfPictures
} )(CalculatorForm);
