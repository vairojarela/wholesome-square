"use strict";

function Player(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.width = 50;
  this.height = 50;
  this.x = this.canvas.width / 2;
  this.y = this.canvas.height - 100;
  this.lives = 10;
  this.name = "";
  this.score = 0;
  this.velocity = 8;
  this.direction = 0;
  this.color = "white";
}

Player.prototype.move = function() {
  var leftCheck = this.x < 0;
  var rightCheck = this.x + this.width > this.canvas.width;
  if (leftCheck) {
    this.x = 0;
    this.direction = 0;
  }
  if (rightCheck) {
    this.x = this.canvas.width - this.width;
    this.direction = 0;
  } else {
    this.x = this.x + this.direction * this.velocity;
  }
};
Player.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.ctx.beginPath();
  this.ctx.moveTo(0, this.canvas.height - 50);
  this.ctx.lineTo(this.canvas.width, this.canvas.height - 50);
  this.ctx.strokeStyle = 'white';
  this.ctx.stroke();
};

Player.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
};
