import React, { Component } from 'react';
import Intro from './components/Intro';

class App extends Component {
  render() {
    return (
      <div>
        <Intro points={100} maxDist={120}/>
      </div>
    );
  }
}

export default App;
