//Pallete:
//#042c62
//#03396c
//#005b96
//#2248d0

var colors = 
{ 
  background: 0x021631,
  circle: 0x2248d0,
  line: 0x03396c,
}

var app;
var g = new PIXI.Graphics();

var points = [];
var pointsNumber = 120;
var maxDist = 120;

$(document).ready(function(){
    initPixi();
    initSections();
  
    window.onresize = () => resizePixi()
    
    var sm = new ScrollManager();
    ScrollManager.offsetTop = 0.35;
    
    sm.addReturnableSection('.header', toggleAnimation);
  
    sm.scrollCheck();
});

function initSections()
{
  //Initializes the section, setting the states before the animations start
}

function toggleAnimation(activated)
{
    if (!activated)
      app.ticker.start();
    else
      app.ticker.stop();
}