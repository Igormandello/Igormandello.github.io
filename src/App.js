import React, { Component } from 'react';
import Intro from './components/Intro';
import AboutMeSection from './components/AboutMeSection';
import Monitor from './components/Monitor';
import Input from './components/Input';
import PopMedia from './components/PopMedia';

import './css/Materialize.css';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <img src={require('./imgs/logo.png')}/>
          </div>
          <nav>
            <a>Sobre mim</a>
            <a>Projetos</a>
            <a>Contato</a>
          </nav>
        </header>
        <Intro points={100} maxDist={120}>
          <h1>Igor Mandello</h1>
          <a></a>
        </Intro>
        <section className="about">
          <h2>Sobre Mim</h2>
          <AboutMeSection image="image.png">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas 
              delectus earum quaerat? Doloribus, obcaecati quo illo mollitia 
              culpa totam voluptatum voluptate maiores voluptatem nemo nihil 
              quod neque nostrum expedita nam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas 
              delectus earum quaerat? Doloribus, obcaecati quo illo mollitia 
              culpa totam voluptatum voluptate maiores voluptatem nemo nihil 
              quod neque nostrum expedita nam?
            </p>
          </AboutMeSection>
          <AboutMeSection image="image.png" reverse>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas 
              delectus earum quaerat? Doloribus, obcaecati quo illo mollitia 
              culpa totam voluptatum voluptate maiores voluptatem nemo nihil 
              quod neque nostrum expedita nam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas 
              delectus earum quaerat? Doloribus, obcaecati quo illo mollitia 
              culpa totam voluptatum voluptate maiores voluptatem nemo nihil 
              quod neque nostrum expedita nam?
            </p>
          </AboutMeSection>
        </section>
        <section>
          <h2>Projetos</h2>
          <Monitor />
          <div>
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas 
              delectus earum quaerat? Doloribus, obcaecati quo illo mollitia 
              culpa totam voluptatum voluptate maiores voluptatem nemo nihil 
              quod neque nostrum expedita nam?
            </p>
            <a>
              <i></i>
              Veja mais no GitHub
            </a>
          </div>

          <div>
          </div>
        </section>
        <section>
          <h2>Contato</h2>
          <div>
            <div>
              <Input />
              <Input />
            </div>
            <Input />
            <Input />

            <a>
              Enviar
            </a>
          </div>
          <div>
            <PopMedia />
            <PopMedia />
            <PopMedia />
            <PopMedia />
          </div>
        </section>
        <footer>
          Igor Mandello © 2018
        </footer>
      </div>
    );
  }
}

export default App;
