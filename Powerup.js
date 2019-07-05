"use strict";

function PowerUp(canvas, randomX) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.width = 10;
  this.height = 10;
  this.x = randomX;
  this.y = 0;
  this.velocity = 14;
  this.direction = 1;
  this.color = "white";
  this.invincible = false;
}

PowerUp.prototype.move = function() {
  this.y = this.y + this.direction * this.velocity;
};

PowerUp.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};
