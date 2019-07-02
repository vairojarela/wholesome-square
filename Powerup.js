'use strict';

function Powerup(canvas, randomX) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.width = 10;
  this.height = 10;
  this.x = randomX;
  this.y = 0;
  this.velocity = 9;
  this.direction = 1;
  this.color = "white";
};

Powerup.prototype.move = function() {
  this.y = this.y + this.direction * this.velocity;
};

Powerup.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};
