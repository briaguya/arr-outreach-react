import React, { Component } from 'react';
import SliderPage from './sliderPage';
import Menu from './menu';

class App extends Component {
  render() {
    return (
      <div class="App">
        <Menu />
        <SliderPage />
      </div>
    );
  }
}

export default App;