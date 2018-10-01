import React, { Component } from 'react';
import Intro from './components/Intro';
import './css/Normalize.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <a>Sobre mim</a>
            <a>Projetos</a>
            <a>Contato</a>
          </nav>
          <div>
            <img />
          </div>
        </header>
        <Intro points={100} maxDist={120}>
          <h1>Igor Mandello</h1>
          <a></a>
        </Intro>
      </div>
    );
  }
}

export default App;
