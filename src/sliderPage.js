import React, { Component } from 'react';
import Slider from './slider.js';
import k1 from './img/emoji/k1.png';
import k2 from './img/emoji/k2.png';
import s1 from './img/emoji/s1.png';
import s2 from './img/emoji/s2.png';
import m1 from './img/emoji/m1.png';
import m2 from './img/emoji/m2.png';
import './sliderPage.css';

class SliderPage extends Component {
  render() {
    return (
        <div className="sliderPage">
            <Slider questionText="How much do you know about what can be recycled in Austin?" 
                leftImage={k1} rightImage={k2} leftText="I don't know anything..." rightText="I know everything!"/>
            <Slider questionText="Do you have a system for recycling at home?" 
                leftImage={s1} rightImage={s2} leftText="I don't have a system at all..." rightText="I have a perfect system!"/>
            <Slider questionText="How motivated are you to recycle?" 
                leftImage={m1} rightImage={m2} leftText="I don't care at all..." rightText="I care a whole lot!"/>
            <button type="submit" className="button-right">Next</button>
        </div>
    );
  }
}

export default SliderPage;