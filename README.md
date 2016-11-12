## SnakeJS

Classic Snake game implemented in HTML5/Javascript using the p5.js library. This is a basic implementation and serves more as practice project with p5.js than a completed game with all the bells and whistles. However, the game will start as soon as the page loads, and will automatically reset if you die, so it can be played continuously.

#### Controls:
- Movement - Arrow Keys

#### Future Improvements:
- Menu and game over screen
- Game configuration and settings, including remapping keys
- Option for playing in classic pixel mode, or using sprites
- Difficulty settings

#### Bugs:
- Because the game is only running at ten frames per second, it is possible to register more than 1 key press in a single frame. This allows the player to press a key for an adjacent direction, immediately followed by the direction opposite of the original direction, and have the snake change direction back on itself in the subsequent frame, resulting in the snake colliding with itself and triggering a game over.

- The location of the food is selected randomly inside of the the grid, with no exceptions, allowing the food to occasionally spawn underneath the snakes body.
