# A Wholesome Square

## Description
Square wants a healthy, prosper and long life. So he went to Dr.Rectangle, who told him to only eat black little squares from now on... Help Square eat as many little squares and avoid any type of color, diversity or fun whatsoever.


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
Classes and methods definition.

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
