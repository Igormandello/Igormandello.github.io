import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import Point from '../js/Point';
import '../css/Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.g = new PIXI.Graphics();
    this.points = [];

    this.pointsNumber = props.points;
    this.maxDist = props.maxDist;

    this.colors = {
      background: 0x021631,
      circle: 0x2248d0,
      line: 0x03396c,
    };
  }

	componentDidMount() {
    var header = this.refs['intro'];
    this.app = new PIXI.Application(header.clientWidth, header.clientHeight, { backgroundColor: this.colors.background, antialias: true });
    this.app.view.style['touch-action'] = 'auto';
    this.refs['introBackground'].appendChild(this.app.view);
    
    for (let n = 0; n < this.pointsNumber; n++)
      this.points.push(new Point(Math.random() * document.body.clientWidth, Math.random() * document.body.clientHeight, Math.random() * 3 + 5, Math.random() * 2 * Math.PI, Math.random() + 1));
        
    this.app.stage.addChild(this.g);
    this.app.ticker.add(this.drawPoints);
	}

	drawPoints = (delta) => {
    this.g.clear();
    this.g.beginFill(this.colors.circle, 1);

    for (let n = 0; n < this.points.length; n++) {
      this.points[n].update(this.app.view.width, this.app.view.height, delta);

      for (let i = 0; i < this.points.length; i++) {
        let dist = this.points[n].distance(this.points[i]);
        if (dist < this.maxDist) {
          this.g.lineStyle(4 - 4 * dist / this.maxDist, this.colors.line, 1 - dist / this.maxDist);
          this.g.moveTo(this.points[n].x, this.points[n].y);
          this.g.lineTo(this.points[i].x, this.points[i].y);
        }
      }
    }

    for (let n = 0; n < this.points.length; n++) {
      this.g.lineStyle(0, 0x000, 1);
      this.g.drawCircle(this.points[n].x, this.points[n].y, this.points[n].radius);
    }

    this.g.endFill();
	}

  render() {
    return (
      <div ref="intro" className="intro">
        <div ref="introBackground" />
      </div>
    );
  }
}

export default Intro;