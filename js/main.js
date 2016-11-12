//
// main.js
// SnakeJS
//
// Created by Matthew Remmel on 11/10/16.
// Copyright (c) 2015 Matthew Remmel. All rights reserved.
//


// Game Parameters
var canvasSize = 600;
var gridSize = 25;
var gridScale = canvasSize / gridSize;

// Player Controlled Snake
var snake;

// Food
var food;


// Function defined by p5.js
function setup() {
    // Setup canvas
    createCanvas(600, 600);

    // Set frame rate
    frameRate(10);

    // Create snake object
    snake = new Snake();

    // Create and setup food object
    food = new Food();
    food.newLocation();
}

// Function defined by p5.js
function draw() {
    // Draw background
    background(51);

    // Draw food
    food.draw();

    // Update and draw snake
    snake.update();
    snake.draw();

    // Check for collisions
    handleCollisions();
}

// Function defined by p5.js
function keyPressed() {
    snake.changeDirection(keyCode)
}

// Check and handle collisions
function handleCollisions() {
    // Check food collision
    if (dist(snake.head().x, snake.head().y, food.position.x, food.position.y) === 0) {
        snake.grow();
        food.newLocation();
    }

    // Check boundary collision
    if (snake.head().x < 0 || snake.head().x >= gridSize || snake.head().y < 0 || snake.head().y >= gridSize) {
        gameOver();
    }

    // Check snake collision with self
    if (snake.isCollidingWithSelf()) {
        gameOver();
    }
}

// Handle end of game
function gameOver() {
    // Reset snake
    snake = new Snake();
}

