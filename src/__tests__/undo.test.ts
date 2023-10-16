import { describe, test, expect } from 'bun:test';
import { TicTacToe } from '..';

describe('Undo', () => {
  test('should undo the last move', () => {
    const game = new TicTacToe();

    game.move(1, 1);
    game.undo();

    expect(game.getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    const newGame = new TicTacToe();
    newGame.move(1, 1);
    newGame.move(2, 2);
    newGame.undo();

    expect(newGame.getBoard()).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  });

  test('should remove the latest move from history on undo', () => {
    const game = new TicTacToe();

    game.move(1, 1);
    game.undo();

    expect(game.history()).toEqual([]);

    const newGame = new TicTacToe();

    newGame.move(1, 1);
    newGame.move(2, 2);
    newGame.undo();

    expect(newGame.history()).toEqual([[1, 1]]);
  });

  test('should undo multiple times in a row', () => {
    const game = new TicTacToe();

    game.move(1, 1);
    game.move(2, 2);
    game.undo();
    game.undo();

    expect(game.getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    game.move(0, 0);
    game.move(2, 2);
    game.move(0, 1);

    game.undo();
    game.undo();

    expect(game.getBoard()).toEqual([
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test('should not undo if there are no moves to undo', () => {
    const game = new TicTacToe();

    expect(() => {
      game.undo();
    }).toThrow('No moves to undo');

    game.move(1, 1);
    game.undo();

    expect(() => {
      game.undo();
    }).toThrow('No moves to undo');
  });
});
