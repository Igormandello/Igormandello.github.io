var blur = new PIXI.filters.BlurFilter();
function initPixi()
{
    var app = new PIXI.Application(document.body.clientWidth, document.body.clientHeight, { transparent: true });
    $("#containerBackground")[0].appendChild(app.view);
    var stage = app.stage;
  
    PIXI.loader.add("t1", "../imgs/code.png");
    PIXI.loader.add("t2", "../imgs/bg.png");
    PIXI.loader.load(setup);
  
    var brush = new PIXI.Graphics();
    brush.beginFill(0xffffff);
    brush.drawCircle(0, 0, 50);
    brush.endFill();
  
    blur.blur = 1;
    code.filters = [blur]
  
    var nd = $("#nameContainer")[0],
        nameRect = { x: nd.offsetLeft + 200, y: nd.offsetTop + 50, width: nd.clientWidth - 200, height: nd.clientHeight - 50 },
        maxDist = Math.hypot(nameRect.x, nameRect.y);
  
    app.ticker.add
    (
      function()  
      {
         var mouse = app.renderer.plugins.interaction.mouse.global;
         
         if (!inside(mouse, nameRect))
         {
            var distX = (mouse.x > nameRect.x + nameRect.width  ? mouse.x - nameRect.x - nameRect.width  : (mouse.x < nameRect.x ? nameRect.x - mouse.x : 0)),
                distY = (mouse.y > nameRect.y + nameRect.height ? mouse.y - nameRect.y - nameRect.height : (mouse.y < nameRect.y ? nameRect.y - mouse.y : 0)),
                dist = Math.hypot(distX, distY);
           
            blur.blur = 10 - dist * 10 / maxDist;
         }
      }
    );
  
    function setup(loader, resources) 
    {
      //Imagem de fundo
      var background = new PIXI.Sprite(resources["t1"].texture);
      var container = new PIXI.Container();
      container.addChild(background);
      stage.addChild(container);

      background.scale.x = document.body.clientWidth / background.width;
      background.scale.y = document.body.clientHeight / background.height;
      
      //Imagem que vai ser revelada
      var imageToReveal = new PIXI.Sprite(resources["t2"].texture);
      var container2 = new PIXI.Container();
      container2.addChild(imageToReveal);
      stage.addChild(container2);
      
      imageToReveal.scale.x = document.body.clientWidth / imageToReveal.width;
      imageToReveal.scale.y = document.body.clientHeight / imageToReveal.height;
      
      var renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);
      var renderTextureSprite = new PIXI.Sprite(renderTexture);
      stage.addChild(renderTextureSprite);
      imageToReveal.mask = renderTextureSprite;

      app.stage.interactive = true;
      app.stage.on('pointerdown', pointerDown);
      app.stage.on('pointerup', pointerUp);
      app.stage.on('pointermove', pointerMove);

      var dragging = false;

      function pointerMove(event) 
      {
          if (dragging) 
          {
              brush.position.copy(event.data.global);
              app.renderer.render(brush, renderTexture, false, null, false);
          }
      }

      function pointerDown(event) 
      {
          dragging = true;
          pointerMove(event);
      }

      function pointerUp(event) 
      {
          dragging = false;
      }
    }
}

function inside (m, r)
{
  return !(m.x < r.x || m.x > r.x + r.width || m.y < r.y || m.y > r.y + r.height);
}