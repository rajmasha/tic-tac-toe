import { describe, test, expect } from 'bun:test';
import { TicTacToe } from '..';

describe('Initalize game with no board', () => {
  test('board should have all 0s', () => {
    const game = new TicTacToe();

    expect(game.getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test('move number should be 1', () => {
    const game = new TicTacToe();
    expect(game.moveNumber()).toEqual(1);
  });

  test('turn should be x', () => {
    const game = new TicTacToe();
    expect(game.turn()).toEqual('x');
  });
});

describe('Initalize game with a board', () => {
  test('board shold be same as input board', () => {
    const game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'o'],
        ['x', 'o', 'x'],
      ],
    });

    expect(game.getBoard()).toEqual([
      [1, -1, 1],
      [-1, 0, -1],
      [1, -1, 1],
    ]);
  });

  test('move number should be calculated correctly from input board', () => {
    const game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'o'],
        ['x', 'o', 'x'],
      ],
    });

    expect(game.moveNumber()).toEqual(9);
  });

  test('turn should be set to input parameter passed', () => {
    const game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'o'],
        ['x', 'o', 'x'],
      ],
      turn: 'x',
    });

    expect(game.turn()).toEqual('x');
  });
});
