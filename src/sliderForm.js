import React, { Component } from 'react';
import Rebase from 're-base';
import Slider from './slider.js';

import './sliderForm.css';

var base = Rebase.createClass({
    apiKey: "AIzaSyBYtTJ9kWkyEKZXTGx3ji_NzxOv53fjnYU",
    authDomain: "arr-outreach-react.firebaseapp.com",
    databaseURL: "https://arr-outreach-react.firebaseio.com",
    projectId: "arr-outreach-react",
    storageBucket: "arr-outreach-react.appspot.com",
    messagingSenderId: "387058332436"
});

class SliderForm extends Component {
    constructor(props) {
    super(props);
    this.state = {};
    var that = this;
    this.props.sliders.forEach(function(s){
      that.setState({
        [s.name]: s.value
      });
    });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(input) {
    this.setState({
      [input.name]: input.value
    });
    console.log(this.state);
  }

  handleSubmit(event){
    alert(this.state.value);
  }

  render() {
    var handleInputChange = this.handleInputChange;
    var sliders = this.props.sliders.map(function(s){
      return <Slider name={s.name} questionText={s.questionText} leftImage={s.leftImage} rightImage={s.rightImage} 
                min={s.min} max={s.max} leftText={s.leftText} rightText={s.rightText} onInputChange={handleInputChange} />;
    });

    return (
      <form className="sliderForm" onSubmit={this.handleSubmit}>
        {sliders}
        <button type="submit" className="button-right">Next</button>
      </form>
    );
  }
}

export default SliderForm;