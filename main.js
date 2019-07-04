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
        <h1>GAME OVER,<span id="player_name"></span></h1>
        <button>Restart</button>
        <button id="reset">Reset</button>
        <p></p>
        <p>Your score was: <span id="player_score"></span></p>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
          <tr>
          <td id="place1">1</td>
          <td id="name1"></td>
          <td id="score1"></td>
          </tr>
        </table>
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
    console.log(scoreArray);

    scoreArray.sort(function(a, b) {
      return a.score - b.score;
    });
    var table = gameOver.querySelector('table');
    console.log(table);
   /*  for (var i = 0; i < scoreArray.length; i++){
      table.appendChild(`<tr>
      <td id="place1">1</td>
      <td id="name1"></td>
      <td id="score1"></td>
      </tr>`);
    } */
    /* var name1 = gameOver.querySelector("#name1");
    name1.innerText = scoreArray[0].name;
    var score1 = gameOver.querySelector("#score1");
    score1.innerText = scoreArray[0].score;
    var name2 = gameOver.querySelector("#name2");
    name2.innerText = scoreArray[0].name;
    var score2 = gameOver.querySelector("#score2");
    score2.innerText = scoreArray[0].score;
    var name3 = gameOver.querySelector("#name3");
    name3.innerText = scoreArray[0].name;
    var score3 = gameOver.querySelector("#score3");
    score3.innerText = scoreArray[0].score; */
    

    scoreArray.reverse();
    console.log(scoreArray.length);

/*     name.innerText = scoreArray[i].name;
    score.innerText = scoreArray[i].score; */

    localStorage.setItem("player", JSON.stringify(scoreArray));

    /* var playerProfile = JSON.parse(playerProfile);  */

    var scoreFinal = gameOver.querySelector("#player_score");
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
