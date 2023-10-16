import { describe, test, expect } from 'bun:test';
import { TicTacToe } from '..';

describe('Winner', () => {
  test('should return false if there is no winner', () => {
    const game = new TicTacToe();

    expect(game.isWinner()).toEqual(false);

    const partiallyFullGame = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'x'],
        ['.', '.', 'o'],
      ],
    });

    const boardFullNoWinnerGame = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'x', 'o'],
      ],
    });

    expect(partiallyFullGame.isWinner()).toEqual(false);
    expect(boardFullNoWinnerGame.isWinner()).toEqual(false);
  });

  test('should return true if there is a winner with a row', () => {
    let horizontalWinnerGame = new TicTacToe({
      board: [
        ['x', 'x', 'x'],
        ['o', '.', 'o'],
        ['.', '.', '.'],
      ],
    });

    expect(horizontalWinnerGame.isWinner()).toEqual(true);

    horizontalWinnerGame = new TicTacToe({
      board: [
        ['x', '.', 'x'],
        ['.', '.', '.'],
        ['o', 'o', 'o'],
      ],
    });

    expect(horizontalWinnerGame.isWinner()).toEqual(true);

    horizontalWinnerGame = new TicTacToe({
      board: [
        ['.', '.', '.'],
        ['o', 'o', 'o'],
        ['.', 'x', 'x'],
      ],
    });

    expect(horizontalWinnerGame.isWinner()).toEqual(true);
  });

  test('should return true if there is a winner with a column', () => {
    let verticalWinnerGame = new TicTacToe({
      board: [
        ['x', 'o', 'o'],
        ['x', '.', 'o'],
        ['x', '.', '.'],
      ],
    });

    expect(verticalWinnerGame.isWinner()).toEqual(true);

    verticalWinnerGame = new TicTacToe({
      board: [
        ['o', 'x', 'o'],
        ['x', 'x', 'o'],
        ['x', '.', 'o'],
      ],
    });

    expect(verticalWinnerGame.isWinner()).toEqual(true);

    verticalWinnerGame = new TicTacToe({
      board: [
        ['o', 'x', 'o'],
        ['.', 'x', 'o'],
        ['x', 'x', '.'],
      ],
    });

    expect(verticalWinnerGame.isWinner()).toEqual(true);
  });

  test('should return true if there is a winner with a diagonal', () => {
    let diagonalWinnerGame = new TicTacToe({
      board: [
        ['x', 'o', 'o'],
        ['o', 'x', 'o'],
        ['o', '.', 'x'],
      ],
    });

    expect(diagonalWinnerGame.isWinner()).toEqual(true);

    diagonalWinnerGame = new TicTacToe({
      board: [
        ['o', 'x', 'o'],
        ['x', 'o', 'o'],
        ['o', '.', 'x'],
      ],
    });

    expect(diagonalWinnerGame.isWinner()).toEqual(true);
  });
});
