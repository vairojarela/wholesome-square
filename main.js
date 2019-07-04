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
    <article class="splash-content">
    <h1>A Wholesome 🅂🅀🅄🄰🅁🄴</h1>
    <button>Start</button>
    </article>
    </section>
    
    `);
    var startButton = splashScreen.querySelector("button");
    startButton.addEventListener("click", createIntro);
  }

  function createIntro() {
    var introScreen = buildDOM(`
    <section class="splash">
    <article class="splash-content">

    <input placeholder="Your square's name" type="text" id="userName" required></input>
    <button>Play</button>

    </article>
    </section>
    `);
    document.getElementById("userName").focus();
    var playButton = introScreen.querySelector("button");
    playButton.addEventListener("click", createGame);
  }

  function createGame() {
    var user = document.getElementById("userName").value;
    /* var newUser = { name: user.value };
    var scoreArray = JSON.parse(localStorage.getItem("player"));
    if (scoreArray === null ){
      scoreArray = [];
    } else
    scoreArray.push(newUser);
    localStorage.setItem("player", JSON.stringify(scoreArray));
 */
    var gameScreen = buildDOM(`
    <section>
    <p class="float-left">Lives: <span></span></p>
    <p class="float-right">Score: <span id="player-score"></span></p>
    <p class="game-title">A Wholesome 🅂🅀🅄🄰🅁🄴</p>
      <canvas>
      </canvas>
      
    </section>
    `);

    var canvasElement = document.querySelector("canvas");
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;

    var gameInstance = new Game(canvasElement);
    gameInstance.gameOverCallback(createGameOver);
    gameInstance.startGame();
    gameInstance.player.name = user;

    document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") {
        //ir hacia la izquierda
        gameInstance.player.setDirection(-1);
      }
      if (event.key === "ArrowRight") {
        //ir hacia la derecha
        gameInstance.player.setDirection(1);
      }

      /* console.log(event); */
    });
  
  }

  function createGameOver() {
    var gameOver = buildDOM(`
      <section class="splash">
      <article class="splash-content">
        <h1>GAME OVER</h1>
        <button>Restart</button>
        <button id="reset">Reset Highscores</button>
        <p></p>
        <p>Your score was: <span></span></p>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
          <tr>
          <td>1</td>
          <td></td>
          <td></td>
          </tr>
        </table>
        </article>
      </section>
    `);

    var scoreArray = localStorage.getItem("player");
    var newPlayer = { name: this.player.name, score: this.player.score };
    if (scoreArray === null ){
      scoreArray = [];
    } else {
      scoreArray = JSON.parse(scoreArray);
    }
    scoreArray.push(newPlayer);
    localStorage.setItem("player", JSON.stringify(scoreArray));

    /* var playerProfile = JSON.parse(playerProfile);  */
    
    var scoreFinal = gameOver.querySelector("span");
    scoreFinal.innerText = this.player.score;
    var reset = function() {
      window.localStorage.clear();
      //add clean the table here later
    };
    var restartButton = gameOver.querySelector("button");
    restartButton.addEventListener("click", createSplash);
    
    var resetButton = gameOver.querySelector("#reset");
    resetButton.addEventListener("click", reset);
  }

  createSplash();
}

window.addEventListener("load", main);
