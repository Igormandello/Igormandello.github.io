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
var pointsNumber = (innerWidth > 768 ? 120 : 40);
var maxDist = 120;

$(document).ready(function(){
    initPixi();
    initSections();
    
    $('[data-toggle="popover"]').popover(); 
    window.onresize = () => resizePixi()
    
    var sm = new ScrollManager();
    ScrollManager.offsetTop = 0.35;
    
    sm.addReturnableSection('.header', toggleAnimation);
    sm.addSection('.contact', showContacts);
  
    sm.scrollCheck();
});

function initSections()
{
    TweenMax.set(".contact div:eq(0)", { x: -500, y: -800, opacity: 0 });
    TweenMax.set(".contact div:eq(2) div", { x: 500, opacity: 0 });
}

function showContacts()
{
    TweenMax.to(".contact div:eq(0)", 0.8, { x: 0, y: 0, opacity: 1 });
    TweenMax.staggerTo(".contact div:eq(2) div", 0.5, { x: 0, opacity: 1 }, 0.4);
}

function toggleAnimation(activated)
{
    if (!activated)
      app.ticker.start();
    else
      app.ticker.stop();
}