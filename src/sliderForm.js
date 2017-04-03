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
  constructor(props){
    super(props);
    this.state = {
      list: [],
      loading: true
    }
  }

  componentDidMount(){
    this.ref = base.syncState('sliderForm', {
      context: this,
      state: 'list',
      asArray: true,
      then(){
        this.setState({loading: false})
      }
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  render() {
    var sliders = this.props.sliders.map(function(s){
      return <Slider questionText={s.questionText} leftImage={s.leftImage} rightImage={s.rightImage} min={s.min} max={s.max} 
                leftText={s.leftText} rightText={s.rightText} />;
    });

    return (
      <form className="sliderForm">
        {sliders}
        <button type="submit" className="button-right">Next</button>
      </form>
    );
  }
}

export default SliderForm;