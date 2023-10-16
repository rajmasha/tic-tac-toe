import { describe, expect, test } from 'bun:test';
import { TicTacToe } from '..';

describe('Common tests', () => {
  test('board should be cleared with all 0s', () => {
    const game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'o'],
        ['x', 'o', 'x'],
      ],
    });

    game.clear();

    expect(game.getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test('should return value at x and y coordinates', () => {
    const game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['.', '.', 'o'],
        ['x', 'o', 'o'],
      ],
    });

    expect(game.get(0, 0)).toEqual('x');
    expect(game.get(1, 1)).toEqual('.');
    expect(game.get(2, 2)).toEqual('o');
  });

  test('should remove the value at the given x and y coordinates', () => {
    let game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'o'],
        ['x', 'o', 'o'],
      ],
    });

    expect(game.remove(0, 0)).toEqual('x');
    expect(game.get(0, 0)).toEqual('.');

    game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'o'],
        ['x', 'o', 'o'],
      ],
    });

    expect(game.remove(1, 1)).toEqual(null);
    expect(game.get(1, 1)).toEqual('.');

    game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'o'],
        ['x', 'o', 'o'],
      ],
    });

    expect(game.remove(1, 2)).toEqual('o');
    expect(game.get(1, 2)).toEqual('.');
  });

  test('should return the value(ascii) of the square', () => {
    const game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'x'],
        ['.', '.', 'o'],
      ],
    });

    expect(game.getAsciiSquare(0, 0)).toEqual('x');
    expect(game.getAsciiSquare(1, 1)).toEqual('.');
    expect(game.getAsciiSquare(2, 2)).toEqual('o');
  });

  test('should return the history of moves', () => {
    const game = new TicTacToe();

    game.move(0, 0);
    game.move(1, 1);
    game.move(2, 2);

    expect(game.history()).toEqual([
      [0, 0],
      [1, 1],
      [2, 2],
    ]);
  });
});
