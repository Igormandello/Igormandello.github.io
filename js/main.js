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

var changeAge, ageReps = 0, age;

$(document).ready(function(){
    initPixi();
    initSections();
    
    $('[data-toggle="popover"]').popover(); 
    window.onresize = () => resizePixi()
    
    let ageDate = new Date(Date.now() - new Date(2001, 1, 17).getTime());
    age = Math.abs(ageDate.getUTCFullYear() - 1970);
    
    var sm = new ScrollManager();
    ScrollManager.offsetTop = 0.65;
    
    sm.addReturnableSection('.header', toggleAnimation);
    sm.addSection('.aboutMe', showAboutMe);
    sm.addSection('.contact', showContacts);
  
    sm.scrollCheck();
});

function initSections()
{
    //AboutMe screen
    TweenMax.set(".aboutMe .content div:eq(0)", { x: -750, opacity: 0 });
    TweenMax.set(".aboutMe .content div:eq(1)", { y: 300, opacity: 0 });
    TweenMax.set(".aboutMe .content div:eq(2)", { x: 750, opacity: 0 });
    
    //Projects screen
    //code
    
    //Contact screen
    TweenMax.set(".contact div:eq(2) div", { x: 500, opacity: 0 });
}

function showAboutMe()
{
    TweenMax.staggerTo(".aboutMe .content div", 0.8, { x: 0, y: 0, opacity: 1 }, 0.4);
    
    setTimeout(function (){ changeAge = setInterval(changeAgeText, 750)}, 1500);
}

function changeAgeText()
{
    if (ageReps < 3)
    {
        let fakeAge = 0;
        
        switch(ageReps)
        {
            case 0: fakeAge = Math.floor(Math.random() * (age - 1) + 1);
                    break;
                
            case 1: fakeAge = Math.floor(Math.random() * (70 - age) + age + 30);
                    break;
                
            case 2: fakeAge = Math.floor(Math.random() * (70 - 2 * age) + age);
                    break;
        }
        
        ageReps++;
        $("#age").text(fakeAge);
    }
    else
    {
        clearInterval(changeAge);
        $("#age").text(age);
    }
}

function showContacts()
{
    TweenMax.staggerTo(".contact div:eq(2) div", 0.5, { x: 0, opacity: 1 }, 0.4);
}

function toggleAnimation(activated)
{
    if (!activated)
      app.ticker.start();
    else
      app.ticker.stop();
}