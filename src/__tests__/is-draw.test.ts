import { describe, test, expect } from 'bun:test';
import { TicTacToe } from '..';

describe('Draw', () => {
  test('should return false if board is not full and there is no winner', () => {
    const game = new TicTacToe();

    expect(game.isDraw()).toEqual(false);

    const partiallyFullGame = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'x'],
        ['.', '.', 'o'],
      ],
    });

    expect(partiallyFullGame.isDraw()).toEqual(false);
  });

  test('should return true if board is full and there is no winner', () => {
    const boardFullNoWinnerGame = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'x', 'o'],
      ],
    });

    expect(boardFullNoWinnerGame.isDraw()).toEqual(true);
  });

  test('should return false if there is a winner', () => {
    const horizontalWinnerGame = new TicTacToe({
      board: [
        ['x', 'x', 'x'],
        ['o', '.', 'o'],
        ['.', '.', '.'],
      ],
    });

    expect(horizontalWinnerGame.isDraw()).toEqual(false);

    const verticalWinnerGame = new TicTacToe({
      board: [
        ['x', 'o', 'o'],
        ['x', '.', 'o'],
        ['x', '.', '.'],
      ],
    });

    expect(verticalWinnerGame.isDraw()).toEqual(false);

    const diagonalWinnerGame = new TicTacToe({
      board: [
        ['x', 'o', 'o'],
        ['.', 'x', 'o'],
        ['.', '.', 'x'],
      ],
    });

    expect(diagonalWinnerGame.isDraw()).toEqual(false);
  });
});
