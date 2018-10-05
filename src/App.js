import React, { Component } from 'react';
import ScrollManager from '@igormandello/scroll-trigger';
import Intro from './components/Intro';
import AboutMeSection from './components/AboutMeSection';
import Monitor from './components/Monitor';
import Input from './components/Input';
import PopMedia from './components/PopMedia';

import './css/Materialize.css';
import './css/App.css';

class App extends Component {
  componentDidMount() {
    this.sm = new ScrollManager();
    ScrollManager.offsetTop = 1;

    let header = document.querySelector('header');
    this.sm.addReturnableSection('.intro', (activated) => {
      header.classList.toggle('inverse');
    });
  }

  render() {
    return (
      <div>
        <header>
          <div>
            <img src={require('./imgs/logo.png')} alt="logo"/>
          </div>
          <nav>
            <a>Sobre mim</a>
            <a>Projetos</a>
            <a>Contato</a>
          </nav>
        </header>
        <Intro points={100} maxDist={120}>
          <h1>Igor Mandello</h1>
          <a href="#about">
            <svg xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="0" x2="50%" y2="100%"/>
              <line x1="50%" y1="100%" x2="100%" y2="0"/>
            </svg>
          </a>
        </Intro>
        <section id="about" className="about">
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
        <section className="projects">
          <h2>Projetos</h2>
          <div className="row">
            <Monitor />
            <div className="col m6 s12">
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas 
                delectus earum quaerat? Doloribus, obcaecati quo illo mollitia 
                culpa totam voluptatum voluptate maiores voluptatem nemo nihil 
                quod neque nostrum expedita nam?
              </p>
              <a className="button">
                <i></i>
                Veja mais no GitHub
              </a>
            </div>
          </div>
          <div>
          </div>
        </section>
        <section className="contact">
          <h2>Contato</h2>
          <div className="row">
            <div className="col l6 m12">
              <Input label="Nome" className="col s12 m6" id="name"/>
              <Input label="Sobrenome" className="col s12 m6" id="lastname"/>
              <Input label="E-mail" type="email" className="col s12" id="email"/>
              <Input label="Mensagem" type="textarea" className="col s12" id="message"/>

              <a className="button">
                Enviar
              </a>
            </div>
            <div className="col l6 s12">
              <div className="row">
                <PopMedia {...socialMedias.github}/>
                <PopMedia {...socialMedias.linkedin} right/>
              </div>
              <div className="row">
                <PopMedia {...socialMedias.facebook}/>
                <PopMedia {...socialMedias.email} right/>
              </div>
            </div>
          </div>
        </section>
        <footer>
          Igor Mandello © 2018
        </footer>
      </div>
    );
  }
}

const socialMedias = {
  github: {
    media: 'GitHub',
    link: '/Igormandello',
  },

  linkedin: {
    media: 'LinkedIn',
    link: '/igormandello',
  },

  facebook: {
    media: 'Facebook',
    link: '/igor.mandello'
  },

  email: {
    media: 'Email',
    link: 'igormandello@gmail.com'
  }
}

export default App;
