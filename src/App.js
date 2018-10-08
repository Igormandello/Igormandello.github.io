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
    let floating = document.querySelector('.floating-button');
    this.sm.addReturnableSection('.intro', (activated) => {
      header.classList.toggle('inverse');
      floating.classList.toggle('active');

      if (!activated)
        this.refs.intro.start();
      else
        this.refs.intro.stop();
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

    this.circles = document.querySelectorAll('.pagination .circle');
    this.circles.forEach((circle, i) => circle.addEventListener('click', () => {
      clearTimeout(this.timeout);
      this.slideNext();

      this.setState((prev) => {
        this.circles[prev.actualProject].classList.remove('active');
        this.circles[i].classList.add('active');
        this.refs.monitor.setActive(i);
  
        return {
          actualProject: i
        }
      });
    }));

    let ageDate = new Date(Date.now() - new Date(2001, 1, 17).getTime());
    let age = Math.abs(ageDate.getUTCFullYear() - 1970);
    for (let i = 1; i < 5; i++)
      setTimeout(this.changeAgeText.bind(this, i - 1, age), i * 1000);

    this.slideNext();
  }

  prevProject = () => {
    clearTimeout(this.timeout);
    this.slideNext();
    
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
    clearTimeout(this.timeout);
    this.slideNext();

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

  slideNext = () => {
    this.timeout = setTimeout(() => {
      this.nextProject();
    }, 5000);
  }

  changeAgeText(i, realAge) {
    let fakeAge = 0;

    switch (i) {
      case 0: fakeAge = Math.floor(Math.random() * (realAge - 1) + 1);
        break;

      case 1: fakeAge = Math.floor(Math.random() * (70 - realAge) + realAge + 30);
        break;

      case 2: fakeAge = Math.floor(Math.random() * (70 - 2 * realAge) + realAge);
        break;

      default: fakeAge = realAge;
        break;
    }

    this.refs.age.innerText = fakeAge;
  }

  render() {
    return (
      <div>
        <header>
          <div>
            <a href="#intro">
              <img src={require('./imgs/logo.png')} alt="logo"/>
            </a>
          </div>
          <nav>
            <a href="#about">Sobre mim</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>
        </header>
        <Intro ref="intro" points={window.innerWidth > 768 ? 100 : 40} maxDist={120}>
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
          <AboutMeSection image="igor.jpg">
            <p>
              Oi! Meu nome é <b>Igor Mandello</b>, tenho <b ref="age">17</b> anos, minha cor preferida é 
              azul real, prefiro frio do que calor e eu gosto muito de limão.
            </p>
            <p>
              Inicialmente planejei seguir para a área da química, mas no meio do 
              caminho acabei encontrando a <b>programação</b>, acabei me apaixonando
              por essa área e nunca mais saí dela.
            </p>
            <p>
              Aos meus 9 anos comecei a estudar <b>percussão</b>, outra grande paixão
              minha, mas aos 14 tive que parar com as aulas por causa dos estudos.
            </p>
            <p>
              Assim que eu pude, me juntei com alguns amigos e nós formamos a <b>The Michaels</b>,
              e até hoje nós fazemos covers de bandas como Arctic Monkeys para os saraus da escola
            </p>
          </AboutMeSection>
          <AboutMeSection image="igor2.jpg" reverse>
            <p>
              Entrei no <a href="http://cotuca.unicamp.br/cotuca/">Cotuca</a> (Colégio Técnico de Campinas)
              em 2016 e passei os melhores (e mais corridos) anos da minha vida la, conheci
              grandes amigos e evolui muito, tanto pessoalmente quanto profissionalmente.
            </p>
            <p>
              Trabalho por lá como Monitor da área de Informática desde 2017,
              e eu percebi que ensinar era a melhor maneira de aprender coisas
              novas, pois eu nunca poderia esquecer o que já havia aprendido,
              já que sempre teria alguém com dúvida naquilo.
            </p>
          </AboutMeSection>
        </section>
        <section id="projects" className="projects">
          <h2>Projetos</h2>
          <div className="row">
            <Monitor ref="monitor" images={projects.map(p => p.image)}/>
            <div className="col m6 s12">
              <h3>{projects[this.state.actualProject].name}</h3>
              <p>
                {projects[this.state.actualProject].desc}
              </p>
              {
                projects[this.state.actualProject].link &&
                <a className="button" href={projects[this.state.actualProject].link} target="_blank">
                  <img src={require('./components/assets/github.svg')} alt=""/>
                  Veja mais no GitHub
                </a>
              }
              {
                projects[this.state.actualProject].site &&
                <a className="button" href={projects[this.state.actualProject].site} target="_blank">
                  <img src={require('./components/assets/github.svg')} alt=""/>
                  Veja o site do projeto
                </a>
              }
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
        <section id="contact" className="contact">
          <h2>Contato</h2>
          <div className="row">
            <form className="col l6 m12" action="https://formspree.io/igormandello@gmail.com" method="POST">
              <Input label="Nome" className="col s12 m6" id="name"/>
              <Input label="Sobrenome" className="col s12 m6" id="lastname"/>
              <Input label="E-mail" type="email" className="col s12" id="email"/>
              <Input label="Mensagem" type="textarea" className="col s12" id="message"/>

              <input type="submit" value="Enviar" className="button"/>
            </form>
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

        <a className="floating-button" href="#intro">
          <svg xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="100%" x2="50%" y2="0"/>
              <line x1="50%" y1="0" x2="100%" y2="100%"/>
          </svg>
        </a>
      </div>
    );
  }
}

const projects = [
  {
    name: 'Spotted Cotuca',
    desc: `Uma plataforma no estilo "correio elegante", onde você pode mandar
      mensagens anônimas para quem você quiser! A aplicação possui integração
      com o Facebook e o Twitter, e as mensagens, quando aprovadas por algum
      administrador, são automaticamente postadas nessas duas plataformas.`,
    link: 'https://github.com/Igormandello/spotted-cotuca',
    site: 'https://newspottedctc.appspot.com',
    image: 'spotted.png'
  }, {
    name: 'Vocare',
    desc: `O Vocare é uma plataforma facilitadora da decisão profissional de
      adolescentes, ela cria um ambiente de discussão sem fronteiras entre os
      jovens e pessoas que já atuam no mercado de trabalho ou que estão com as
      mesmas dúvidas. Além disso, ela possui seções de conhecimento de profissões,
      que explicam melhor sobre cada curso, onde pode ser encontrado e diversas
      outras coisas!`,
    link: 'https://github.com/Igormandello/vocare',
    site: 'https://Igormandello.github.io/vocare',
    image: 'vocare.png'
  }, {
    name: 'American Pedras Administração',
    desc: `Projeto focado para a empresa do meu pai, ajuda na administração com
      uma interface amigável e de fácil uso, inicialmente feita em C# (Windows Forms)
      e posteriormente transferida para Electron. Possui métodos para o gerenciamento
      dos materiais, assim como criação de orçamentos, conversão para PDF e impressão.`,
    image: 'apadmin.png'
  }
]

const socialMedias = {
  github: {
    media: 'GitHub',
    link: <a href="htps://github.com/Igormandello" target="_blank">/Igormandello</a>,
  },

  linkedin: {
    media: 'LinkedIn',
    link: <a href="htps://linkedin.com/igormandello" target="_blank">/igormandello</a>,
  },

  facebook: {
    media: 'Facebook',
    link: <a href="htps://facebook.com/igor.mandello" target="_blank">/igor.mandello</a>
  },

  email: {
    media: 'Email',
    link: 'igormandello@gmail.com'
  }
}

export default App;
