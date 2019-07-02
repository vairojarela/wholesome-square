"use strict";


function Enemy(canvas, randomX) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.width = 20;
  this.height = 20;
  this.x = randomX;
  this.y = 0;
  this.velocity = 10;
  this.direction = 1;
  this.color = "red";
}

Enemy.prototype.move = function() {
  this.y = this.y + this.direction * this.velocity;
};

Enemy.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};
