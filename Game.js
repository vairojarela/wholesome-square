"use strict";
function Game(canvas) {
  this.player = null;
  this.enemies = [];
  this.powerups = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.onGameOver = null;
}

Game.prototype.startGame = function() {
  //inicializar player y enemies
  this.player = new Player(this.canvas);

  var loop = enemyColors => {
    if (Math.random() > 0.9) {
      var randomX = Math.random() * this.canvas.width - 10;
      var colors = ["red", "blue", "green", "yellow", "hotpink", "orange"];
      var randomColor = Math.floor(Math.random() * colors.length);
      var enemyColor = colors[randomColor];
      var newEnemy = new Enemy(this.canvas, randomX, enemyColor);
      this.enemies.push(newEnemy);
    }

    if (Math.random() > 0.96) {
      var randomP = Math.random() * this.canvas.width - 10;
      var newPowerup = new Powerup(this.canvas, randomP);
      this.powerups.push(newPowerup);
    }

    //Update
    this.update();
    //Clear
    this.clear();
    //Draw
    this.draw();
    this.checkCollisions();
    if (!this.isGameOver) {
      requestAnimationFrame(loop);
    } else {
      this.onGameOver();
    }
  };
  loop();
};

Game.prototype.update = function() {
  this.player.move();
  this.enemies.forEach(function(enemy) {
    enemy.move();
  });
  this.powerups.forEach(function(powerup) {
    powerup.move();
  });
};
Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Game.prototype.draw = function() {
  this.player.draw();
  this.enemies.forEach(function(enemy) {
    enemy.draw();
  });
  this.powerups.forEach(function(powerup) {
    powerup.draw();
  });

  Game.prototype.checkCollisions = function() {
    this.enemies.forEach((enemy, index) => {
      var rightLeft = this.player.x + this.player.width >= enemy.x;
      var leftRight = this.player.x <= enemy.x + enemy.width;
      var bottomTop = this.player.y + this.player.height >= enemy.y;
      var topBottom = this.player.y <= enemy.y + enemy.height;
      var counter = document.querySelector("span");
      counter.innerText = this.player.lives;

      if (rightLeft && leftRight && bottomTop && topBottom) {
        this.enemies.splice(index, 1);
        this.player.lives--;
        if (this.player.lives === 0) {
          this.isGameOver = true;
        }
      }
    });
    this.powerups.forEach((powerup, index) => {
      var rightLeft = this.player.x + this.player.width >= powerup.x;
      var leftRight = this.player.x <= powerup.x + powerup.width;
      var bottomTop = this.player.y + this.player.height >= powerup.y;
      var topBottom = this.player.y <= powerup.y + powerup.height;

      if (rightLeft && leftRight && bottomTop && topBottom) {
        this.powerups.splice(index, 1);
        this.player.lives++;
        /*   if (this.player.lives === 0) {
          this.isGameOver = true;
        } */
      }
    });
  };
};

Game.prototype.gameOverCallback = function(callback) {
  this.onGameOver = callback;
};

// MINIMO 3 PANTALLAS (START - GAME -OVER)
//MINIMO DOS FUNCIONES CONTRUCTORAS (PLAYER - ENEMY)
//DEMAS FUNCIONES SON EXTRAS
//

//BACKLOG
//TO DO
//DOING
//QA
//DONE
