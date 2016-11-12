//
// food.js
// SnakeJS
//
// Created by Matthew Remmel on 11/10/16.
// Copyright (c) 2015 Matthew Remmel. All rights reserved.
//


function Food() {

    // Food position
    this.position = createVector(0, 0);


    this.draw = function() {
        // Food color
        fill(255);

        // Draw food
        rect(this.position.x * gridScale, this.position.y * gridScale, gridScale, gridScale);
    };

    this.newLocation = function() {
        this.position = createVector(floor(random(0, gridSize)), floor(random(0, gridSize)));
    };

    // Set to random starting position
    this.newLocation();
}