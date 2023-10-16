import { describe, it, expect } from 'bun:test';
import { TicTacToe } from '..';

describe('Board', () => {
  const tests = [
    {
      input: [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.'],
      ],
      output: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    {
      input: [
        ['x', 'o', 'x'],
        ['o', '.', 'o'],
        ['x', 'o', 'x'],
      ],
      output: [
        [1, -1, 1],
        [-1, 0, -1],
        [1, -1, 1],
      ],
    },
  ];

  tests.forEach((test) => {
    it('board should be same as input board', () => {
      const game = new TicTacToe({
        board: test.input,
        turn: 'x',
      });

      expect(game.getBoard()).toEqual(test.output);
    });
  });
});
