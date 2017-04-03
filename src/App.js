import React, { Component } from 'react';
import SliderForm from './sliderForm';
import Menu from './menu';

import k1 from './img/emoji/k1.png';
import k2 from './img/emoji/k2.png';
import s1 from './img/emoji/s1.png';
import s2 from './img/emoji/s2.png';
import m1 from './img/emoji/m1.png';
import m2 from './img/emoji/m2.png';
var sliders = [
    { name: "knowledge", questionText: "How much do you know about what can be recycled in Austin?", min: 0, max: 10,
      leftImage: k1, rightImage: k2, leftText: "I don't know anything...", rightText: "I know everything!"},
    { name: "system", questionText: "Do you have a system for recycling at home?", min: 0, max: 10,
      leftImage: s1, rightImage: s2, leftText: "I don't have a system at all...", rightText: "I have a perfect system!"},
    { name: "motivation", questionText: "How motivated are you to recycle?", min: 0, max: 10,
      leftImage: m1, rightImage: m2, leftText: "I don't care at all...", rightText: "I care a whole lot!"}
];

class App extends Component {
  render() {
    return (
      <div class="App">
        <Menu />
        <SliderForm sliders={sliders}/>
      </div>
    );
  }
}

export default App;