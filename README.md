# tic-tac-toe

tic-tac-toe is a headless typeScript library! It provides an easy-to-use set of methods to manage and manipulate Tic Tac Toe games in your applications. This library can simplify the process of working with Tic Tac Toe game logic.

## Features

- Game Management: Easily create, manipulate, and manage Tic Tac Toe games.
- Board State: Access the current state of the game board, including moves made and game outcome.
- Make moves: Validates moves, ensuring they adhere to the game's rules.
- Win Detection: Detect if there is a winner or the game is drawn.

## Getting Started

To get started with the tic-tac-toe library, you can follow these simple steps:

### Installation

Install the library via npm or yarn:

```bash
npm install @rajmasha/tic-tac-toe
# or
yarn add @rajmasha/tic-tac-toe
# or
bun add @rajmasha/tic-tac-toe
```

### Import and Use

Import the library into your project and start using its functions:

```
// esm
import { TicTacToe } from '@rajmasha/tic-tac-toe';

// cjs
const { TicTacToe } = require('@rajmasha/tic-tac-toe');

const game = new TicTacToe();
// Start making moves, checking for wins, and more!
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.