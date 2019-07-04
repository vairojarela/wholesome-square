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

Game.prototype.audio = function(sound) {
  var audio = new Audio('title-screen.mp3');
  if (sound === "play"){
    audio.play();
  }
  if (sound === "stop"){
    audio.pause();
  }
}

Game.prototype.startGame = function() {
  
  //inicializar player y enemies
  this.player = new Player(this.canvas);
  /* this.audio("play"); */

  var loop = enemyColors => {
    this.player.score++;
    if (Math.random() > 0.5) {
      var randomX = Math.random() * this.canvas.width - 10;
      var colors = ["red", "blue", "green", "yellow", "hotpink", "orange", "aqua"];
      var randomColor = Math.floor(Math.random() * colors.length);
      var enemyColor = colors[randomColor];
      var newEnemy = new Enemy(this.canvas, randomX, enemyColor);
      this.enemies.push(newEnemy);
    }

    if (Math.random() > 0.95) {
      var randomP = Math.random() * this.canvas.width - 10;
      var newPowerUp = new PowerUp(this.canvas, randomP);
      this.powerups.push(newPowerUp);
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
/*   console.log(this.enemies);
  console.log(this.powerups); */
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
      var livesRemaining = "";
      var livesRemaining = document.querySelector("span");
      livesRemaining.innerText = this.player.lives;
      var playerScore = document.querySelector("#player-score");
      if (playerScore != null) {
        playerScore.innerText = this.player.score;
      }
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
        this.player.score = this.player.score + 50;
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
