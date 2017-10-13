function initPixi()
{
    var header = $('.header');
    app = new PIXI.Application(header.width(), header.height(), { backgroundColor: colors.background, antialias: true });
    $("#containerBackground")[0].appendChild(app.view);
    
    for (let n = 0; n < pointsNumber; n++)
        points.push(new Point(Math.random() * document.body.clientWidth, Math.random() * document.body.clientHeight, Math.random() * 3 + 5, Math.random() * 2 * Math.PI, Math.random() + 1));
        
    app.stage.addChild(g);
    app.ticker.add(drawPoints);
}

function drawPoints(delta)
{
    g.clear();
    g.beginFill(colors.circle, 1);

    for (var n = 0; n < points.length; n++)
    {
        points[n].update(app.view.width, app.view.height, delta);

        for(var i = 0; i < points.length; i++)
        {
            var dist = points[n].distance(points[i]);
            if (dist < maxDist)
            {
                g.lineStyle(4 - 4 * dist / maxDist, colors.line, 1 - dist / maxDist);
                g.moveTo(points[n].x, points[n].y);
                g.lineTo(points[i].x, points[i].y);
            }
        }    
    }

    for (var n = 0; n < points.length; n++)
    {
        g.lineStyle(0, 0x000, 1);
        g.drawCircle(points[n].x, points[n].y, points[n].radius);
    }

    g.endFill();
}

function resizePixi()
{
  points = [];
  
  var container = $("#containerBackground")[0];
  container.removeChild(app.view);
  
  app.ticker.remove(drawPoints);
  initPixi();
}

function Point(x, y, radius, angle, speed)
{
    this.x = x;
    this.y = y;
    this.moduleX = Math.cos(angle) * speed;
    this.moduleY = Math.sin(angle) * speed;
    this.radius = radius;
    
    this.update = (maxX, maxY, delta) =>
    {
        if (this.x + this.radius * 2 < 0)
            this.x = maxX;
        else if (this.x > maxX)
            this.x = 0;
        
        if (this.y + this.radius * 2 < 0)
            this.y = maxY;
        else if (this.y > maxY)
            this.y = 0;
        
        this.x += this.moduleX * delta;
        this.y += this.moduleY * delta;
    }
    
    this.distance = (other) =>
    {
        var cat1 = other.x - this.x,
            cat2 = other.y - this.y;
        
        return Math.hypot(cat1, cat2);
    }
}
