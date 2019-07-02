# A Wholesome Square

## Description
Square wants a healthy, prosper and long life. So he went to Dr.Rectangle, who told him to only eat little black squares from now on... Help Square eat as many little squares and avoid any type of color, diversity or fun whatsoever.


## MVP (DOM - CANVAS)

This game has four states: 

Start: Initial game screen, showing a simple splash and start button.

Game: It will allow the player to move left or right between the canvas width.

Game Over: The game will end if the player touches or eats 3 colored shapes. This screen would have a button that restarts the game when clicked.

The game is about touching or eating the little black squares with the big player square while avoiding the colored evil squares, basically.

## Backlog

- Levels
- Music
- Intro & Storyline
- Animations
- Items (Invincibility & Others)
- Different difficulties

## Data structure

 - main.js: only methods-> createSplash(), createGame(), createGameOver(), buildDOM()
 - Player.js: this.x, this.y(fixed), this.width, this.height, this.color, this.direction, this.speed. this.draw(), this.move(), this.checkBorders(), this.updateLives()
 - Enemy.js: this.x, this.y, this.width, this.height, this.color, this.direction, this.speed. this.draw(), this.move(), this.eliminateEnemy()


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Task
Task definition in order of priority

- create files (index.html, style.css, main.js, Game.js, Player.js, Enemy.js.
- wireframe and game states (start->game->win/gameover->start)
- create canvas
- display Player on canvas
- code movement of player, limited to widht of the canvas
- generate an enemy
- generate Item
- generate multiple and random enemies
- make enemies randomized colors
- code collisions between Player and Enemy
- substract life from player if collision happens
- code collisions between Player and Item
- do something about the item(initally food, add +1 life)

## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
