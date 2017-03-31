import React, { Component } from 'react';
import './slider.css';

class Slider extends Component {
  render() {
    return (
        <div className="slider">
            <h2>{this.props.questionText}</h2>
            <span className="leftImage">
                <img src={this.props.leftImage}/>
                <p className="leftText">{this.props.leftText}</p>
            </span>
            <div className="rightImage">
                <img src={this.props.rightImage}/>
                <p className="rightText">{this.props.rightText}</p>
            </div>
            <div className="range-slider">
                <input id="systemSlider" className="range-slider__range" type="range" defaultValue="5" min="0" max="10"/>
                <span className="range-slider__value">0</span>
            </div>
        </div>
    );
  }
}

export default Slider;