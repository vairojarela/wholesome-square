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
    <button id="howto">How To</button>
    </article>
    </section>
    
    `);
    var startButton = splashScreen.querySelector("button");
    var howToButton = document.getElementById("howto");
    startButton.addEventListener("click", createIntro);
    howToButton.addEventListener("click", createHowTo);
  }

  function createIntro() {
    var introScreen = buildDOM(`
    <section class="splash">
    <article class="splash-content">
    <input placeholder="Your name" type="text" id="name" required="required"/>
    <div class="bar"></div>
    <button>Play</button>
    

    </article>
    </section>
    `);
    document.getElementById("name").focus();
    var playButton = introScreen.querySelector("button");
    playButton.addEventListener("click", createGame);
  }

  function createHowTo() {
    var howToScreen = buildDOM(`
    <section class="splash">
    <article class="splash-content">
    <p class="howto-text">This is the story of Mr. Cuadrado, a regular and plain square that went to his doctor, Dr. Rectángulo, who gave him some very unfortunate news. He'll never be able to eat his favourite dish: <span class="rainbow">colored squares.</span></p>
    <p class="howto-text">If he does this more than the amount of lives he has, <strong>he'll die.</strong></p>
    <p class="howto-text">From now on, the doctor said, you'll only be able to eat white squares, kinda like yourself but smaller.</p>
    <p class="howto-text"><small>Note: Canibalism is totally normal in Square planet.</small></p>
    <button>Back</button>

    </article>
    </section>
    `);
    var backButton = howToScreen.querySelector("button");
    backButton.addEventListener("click", createSplash);
  }

  function createGame() {
    var user = document.getElementById("name").value;
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
    });
  }

  function createGameOver() {
    var gameOver = buildDOM(`
      <section class="splash">
      <article class="splash-content">
        <h1>GAME OVER, <span id="player_name"></span></h1>
        <button>Play Again</button>
        <button id="reset">Reset Scores</button>
        <p class="highscores">Highscores:</p>
        <p class="highscores">Your score was: <span id="player_score"></span></p>
        <ul id="highscores">
        </ul>
        </article>
      </section>
    `);
    var scoreArray = localStorage.getItem("player");
    var newPlayer = { name: this.player.name, score: this.player.score };
    var playerN = gameOver.querySelector("#player_name");
    playerN.innerText = this.player.name;
    if (scoreArray === null) {
      scoreArray = [];
    } else {
      scoreArray = JSON.parse(scoreArray);
    }
    scoreArray.push(newPlayer);
    scoreArray.sort(function(a, b) {
      return a.score - b.score;
    });
    var li = gameOver.querySelector("li");
    scoreArray.reverse();
    var ul = document.createElement("ul");
    document.getElementById("highscores").appendChild(ul);
    scoreArray.forEach(function(score) {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerText = score.name + "  " + score.score;
    });

    localStorage.setItem("player", JSON.stringify(scoreArray));
    var scoreFinal = gameOver.querySelector("#player_score");
    scoreFinal.innerText = this.player.score;

    var reset = function() {
      window.localStorage.clear();
      var ul = gameOver.querySelector("#highscores");
      ul.innerHTML = "";
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
