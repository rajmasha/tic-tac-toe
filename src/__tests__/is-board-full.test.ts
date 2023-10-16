import { describe, test, expect } from 'bun:test';
import { TicTacToe } from '..';

describe('Board full', () => {
  test('should return true if the board is full', () => {
    const gameFull = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'x', 'o'],
      ],
    });

    expect(gameFull.isBoardFull()).toEqual(true);
  });

  test('should return false if the board is not full', () => {
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

    expect(gameEmpty.isBoardFull()).toEqual(false);
    expect(gamePartiallyEmpty.isBoardFull()).toEqual(false);
  });
});
