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
  state = {
    actualProject: 0
  }

  componentDidMount() {
    this.sm = new ScrollManager();
    ScrollManager.offsetTop = 0.3;

    let header = document.querySelector('header');
    this.sm.addReturnableSection('.intro', (activated) => {
      header.classList.toggle('inverse');
    });

    this.sm.addSection('.contact > .row > .col:last-child', () => {
      let i = 0;
      let interval = setInterval(() => {
        this.refs['pop' + i].toggleMedia();

        i++;
        if (i === 4)
          clearInterval(interval);
      }, 400);
    });

    let labels = document.querySelectorAll('.input-field label');
    let inputs = document.querySelectorAll('.input-field input, .input-field textarea');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('click', () => {
        labels[i].classList.add('active');
      });

      inputs[i].addEventListener('blur', () => {
        labels[i].classList.remove('active');
      });
    }

    this.circles = document.querySelectorAll('.pagination .circle');
    this.refs.monitor.setActive(0);
  }

  prevProject = () => {
    let project = this.state.actualProject - 1;
    if (project < 0)
      project = projects.length - 1;

    this.circles[this.state.actualProject].classList.remove('active');
    this.circles[project].classList.add('active');
    this.refs.monitor.setActive(project);

    this.setState(() => {
      return {
        actualProject: project
      }
    });
  }

  nextProject = () => {
    let project = this.state.actualProject + 1;
    if (project >= projects.length)
      project = 0;

    this.circles[this.state.actualProject].classList.remove('active');
    this.circles[project].classList.add('active');
    this.refs.monitor.setActive(project);

    this.setState(() => {
      return {
        actualProject: project
      }
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
            <Monitor ref="monitor" images={projects.map(p => p.image)}/>
            <div className="col m6 s12">
              <h3>{projects[this.state.actualProject].name}</h3>
              <p>
                {projects[this.state.actualProject].desc}
              </p>
              <a className="button" href={projects[this.state.actualProject].link} target="_blank">
                <img src={require('./components/assets/github.svg')} alt=""/>
                Veja mais no GitHub
              </a>
            </div>
          </div>
          <div className="pagination">
            <span onClick={this.prevProject} className="before" />
            <span className="circle active"/>
            <span className="circle"/>
            <span className="circle"/>
            <span onClick={this.nextProject} className="after" />
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
              <PopMedia ref="pop0" {...socialMedias.github}/>
              <PopMedia ref="pop1" {...socialMedias.linkedin} right/>
              <PopMedia ref="pop2" {...socialMedias.facebook}/>
              <PopMedia ref="pop3" {...socialMedias.email} right/>
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

const projects = [
  {
    name: 'Lorem 1',
    desc: 'lorem ipsum dolor sit amet',
    link: 'https://google.com',
    image: 'project1.png'
  }, {
    name: 'Lorem 2',
    desc: 'lorem ipsum dolor sit amet',
    link: 'https://google.com',
    image: 'project2.png'
  }, {
    name: 'Lorem 3',
    desc: 'lorem ipsum dolor sit amet',
    link: 'https://google.com',
    image: 'project3.png'
  }
]

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
