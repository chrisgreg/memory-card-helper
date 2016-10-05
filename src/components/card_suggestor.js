import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changeType,
  changeResolution,
  changeNumberOfPictures,
  suggestMemoryCard
} from '../actions/index';

class CardSuggestor extends Component {

  componentWillMount(){
    this.props.suggestMemoryCard();
  }

  changeType(e) {
    const type = e.target.value;
    this.props.changeType(type);
    this.props.suggestMemoryCard();
  }

  changeResolution(e){
    const resolution = e.target.value;
    this.props.changeResolution(resolution);
    this.props.suggestMemoryCard();
  }

  changeNumberOfPictures(e) {
    const pictureCount = e.target.value;
    this.props.changeNumberOfPictures(pictureCount);
    this.props.suggestMemoryCard();
  }


  render() {
    return (
      <div>
        <h5>Get a card size suggestion:</h5>
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
                Number of pictures
              </label>
              <input type="number" placeholder={1} min={1} onChange={this.changeNumberOfPictures.bind(this)}/> MP
            </div>
          </div>
          <div className="inputs">
            <div className="input-group">
              <label>
                Image Resolution (Megapixels)
              </label>
              <input type="number" placeholder={1} min={1} onChange={this.changeResolution.bind(this)}/> MP
            </div>
          </div>
        </form>
        <div className="result-section">
          <p>Looks like you need to store:<br />
              <span className="result">{this.props.rawSize} GB of data</span>
          </p>
          <p>Minimum size memory card required*:<br />
              <span className="result">{this.props.recomendedSize}</span>
          </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { rawDataSize, cardSize } = state.suggestor;
  return {
    recomendedSize: cardSize,
    rawSize: rawDataSize.toFixed(3),
  }
}

export default connect(mapStateToProps, {
  changeType,
  changeResolution,
  changeNumberOfPictures,
  suggestMemoryCard
} )(CardSuggestor);
