function Point(x, y, radius, angle, speed) {
  this.x = x;
  this.y = y;
  this.moduleX = Math.cos(angle) * speed;
  this.moduleY = Math.sin(angle) * speed;
  this.radius = radius;

  this.update = (maxX, maxY, delta) => {
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

  this.distance = (other) => {
    var cat1 = other.x - this.x,
        cat2 = other.y - this.y;

    return Math.hypot(cat1, cat2);
  }
}

export default Point;