import { describe, test, expect } from 'bun:test';
import { TicTacToe } from '..';

describe('Game over', () => {
  test('should return true if the game is over due to a winner', () => {
    const horizontalWinnerGame = new TicTacToe({
      board: [
        ['x', 'x', 'x'],
        ['o', '.', 'o'],
        ['.', '.', '.'],
      ],
    });

    expect(horizontalWinnerGame.isGameOver()).toEqual(true);
  });

  test('should return true if the game is over due to a full board', () => {
    const boardFullNoWinnerGame = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'x', 'o'],
      ],
    });

    expect(boardFullNoWinnerGame.isGameOver()).toEqual(true);
  });

  test('should return false if the game is not over', () => {
    const gameEmpty = new TicTacToe({
      board: [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.'],
      ],
    });

    const gamePartiallyEmpty = new TicTacToe({
      board: [
        ['o', '.', '.'],
        ['.', 'x', 'o'],
        ['x', '.', '.'],
      ],
    });

    expect(gameEmpty.isGameOver()).toEqual(false);
    expect(gamePartiallyEmpty.isGameOver()).toEqual(false);
  });
});
