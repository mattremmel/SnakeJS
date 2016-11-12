//
// snake.js
// SnakeJS
//
// Created by Matthew Remmel on 11/10/16.
// Copyright (c) 2015 Matthew Remmel. All rights reserved.
//


function Snake() {

    // Snake body
    this.body = [createVector(1, 1)];

    // Snake speed/direction
    this.delta = createVector(1, 0);


    this.update = function() {
        // Update body positions
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        this.body[0].x += this.delta.x;
        this.body[0].y += this.delta.y;
    };

    this.draw = function() {
        // Snake color
        fill(255);

        // Draw snake body
        for (var i = 0; i < this.body.length; i++) {
            rect(this.body[i].x * gridScale, this.body[i].y * gridScale, gridScale, gridScale);
        }
    };

    this.changeDirection = function(keyPress) {
        // Arrow key up
        if (keyPress === UP_ARROW && this.delta.y != 1) {
            this.delta.x = 0;
            this.delta.y = -1;
        }
        // Arrow key down
        else if (keyPress === DOWN_ARROW && this.delta.y != -1) {
            this.delta.x = 0;
            this.delta.y = 1;
        }
        // Arrow key left
        else if (keyPress === LEFT_ARROW && this.delta.x != 1) {
            this.delta.x = -1;
            this.delta.y = 0;
        }
        // Arrow key right
        else if (keyPress === RIGHT_ARROW && this.delta.x != -1) {
            this.delta.x = 1;
            this.delta.y = 0;
        }
    };

    this.head = function() {
        return this.body[0];
    };

    this.grow = function() {
        this.body.push(createVector(0, 0))
    };

    this.isCollidingWithSelf = function() {
        for (var i = 1; i < this.body.length; i++) {
            if (this.body[0].x === this.body[i].x && this.body[0].y === this.body[i].y) {
                return true;
            }
        }
        return false;
    }
}

