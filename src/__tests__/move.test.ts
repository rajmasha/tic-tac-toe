import { describe, test, expect } from 'bun:test';
import { TicTacToe } from '..';

describe('Move', () => {
  test('should set the value at the given x and y coordinates', () => {
    const game = new TicTacToe();

    const partiallyFullGame = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'x'],
        ['.', '.', 'o'],
      ],
    });

    game.move(0, 0);
    expect(game.get(0, 0)).toEqual('x');

    game.move(1, 1);
    expect(game.get(1, 1)).toEqual('o');

    game.move(2, 2);
    expect(game.get(2, 2)).toEqual('x');

    partiallyFullGame.move(1, 1);
    expect(partiallyFullGame.get(1, 1)).toEqual('x');
  });

  test('should throw an error if invalid x or y coordinates are given', () => {
    const game = new TicTacToe();

    expect(() => game.move(-1, 0)).toThrow('Invalid move');
    expect(() => game.move(0, -1)).toThrow('Invalid move');
    expect(() => game.move(3, 0)).toThrow('Invalid move');
    expect(() => game.move(0, 3)).toThrow('Invalid move');
  });

  test('should throw an error if the square is already occupied', () => {
    const game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'x'],
        ['.', '.', 'o'],
      ],
    });

    expect(() => game.move(0, 0)).toThrow('Invalid move');
    expect(() => game.move(0, 1)).toThrow('Invalid move');
    expect(() => game.move(2, 2)).toThrow('Invalid move');
  });

  test('should increment the move number', () => {
    const game = new TicTacToe();

    expect(game.moveNumber()).toEqual(1);

    game.move(0, 0);
    expect(game.moveNumber()).toEqual(2);

    game.move(1, 1);
    expect(game.moveNumber()).toEqual(3);

    game.move(2, 2);
    expect(game.moveNumber()).toEqual(4);
  });

  test('should change the turn', () => {
    const game = new TicTacToe();

    expect(game.turn()).toEqual('x');

    game.move(0, 0);
    expect(game.turn()).toEqual('o');

    game.move(1, 1);
    expect(game.turn()).toEqual('x');

    game.move(2, 2);
    expect(game.turn()).toEqual('o');
  });

  test('should return the list of possible moves that can be made', () => {
    const game = new TicTacToe();

    expect(game.moves()).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ]);

    game.move(0, 0);
    expect(game.moves()).toEqual([
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ]);

    game.move(1, 1);
    expect(game.moves()).toEqual([
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ]);

    game.move(2, 2);
    expect(game.moves()).toEqual([
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 1],
    ]);
  });

  test('should not be able to make a move if the game is over', () => {
    const game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'x'],
        ['o', '.', 'x'],
      ],
    });

    expect(() => game.move(1, 1)).toThrow('Game is over');
  });

  test('should append a move to the history when a move is made', () => {
    const game = new TicTacToe();

    game.move(0, 0);
    expect(game.history()).toEqual([[0, 0]]);

    game.move(1, 1);
    expect(game.history()).toEqual([
      [0, 0],
      [1, 1],
    ]);

    game.move(2, 2);
    expect(game.history()).toEqual([
      [0, 0],
      [1, 1],
      [2, 2],
    ]);
  });

  test('should not append a move to the history if the move is invalid', () => {
    const game = new TicTacToe({
      board: [
        ['x', 'o', 'x'],
        ['o', '.', 'x'],
        ['.', '.', 'o'],
      ],
    });

    expect(() => game.move(0, 0)).toThrow('Invalid move');
    expect(game.history()).toEqual([]);
  });

  test('should not append a move to the history if the game is over', () => {
    const game = new TicTacToe();

    game.move(0, 0);
    game.move(1, 1);
    game.move(0, 1);
    game.move(2, 2);
    game.move(0, 2);

    expect(() => game.move(1, 0)).toThrow('Game is over');
    expect(game.history()).toEqual([
      [0, 0],
      [1, 1],
      [0, 1],
      [2, 2],
      [0, 2],
    ]);
  });
});
