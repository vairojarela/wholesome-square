"use strict";


function Enemy(canvas, randomX, enemyColor) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.width = 25;
  this.height = 25;
  this.x = randomX;
  this.y = 0;
  this.velocity = 11;
  this.direction = 1;
  this.color = enemyColor;
}

Enemy.prototype.move = function() {
  this.y = this.y + this.direction * this.velocity;
};

Enemy.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};
