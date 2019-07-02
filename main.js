"use strict";

function main() {
  var main = document.querySelector("#site-main");
  function buildDOM(html) {
    main.innerHTML = html;
    return main;
  }




  function createSplash() {
    var splashScreen = buildDOM(`
    <section class="splash">
    <h1>A Wholesome Square</h1>
    <button>Start</button>
    </section>
    `);
    var startButton = splashScreen.querySelector("button");
    startButton.addEventListener("click", createGame);
  }

  function createGame() {
    var gameScreen = buildDOM(`
    <section>
      <canvas>
      </canvas>
      <p>Lives remaining: <span></span></p>
    </section>
    `);
    
    var canvasElement = document.querySelector("canvas");
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
   
    var gameInstance = new Game(canvasElement);
    gameInstance.gameOverCallback(createGameOver);
    gameInstance.startGame();

    document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") {
        //ir hacia la izquierda
        gameInstance.player.setDirection(-1);
      }
      if (event.key === "ArrowRight") {
        //ir hacia la derecha
        gameInstance.player.setDirection(1);
      }
      console.log(event);
    });
  }


  function createGameOver() {
    var gameOver = buildDOM(`
      <section class="splash">
        <h1>GAME OVER<h1>
        <button>Restart</button>
      </section>
    `);
    var restartButton = gameOver.querySelector("button");
    restartButton.addEventListener("click", createSplash);
  }

  createSplash();
}

window.addEventListener("load", main);
