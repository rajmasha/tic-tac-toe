export type Board = number[][];
export type ASCIIBoard = string[][];

type TicTacToeParams = {
  board?: ASCIIBoard;
  turn?: 'x' | 'o';
};

export class TicTacToe {
  _X = 1;
  _O = -1;
  private _turn = this._X;
  private _moveNumber = 1;
  private _history: number[][] = [];
  private _board: Board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  constructor({ board, turn }: TicTacToeParams = {}) {
    if (board) {
      this._board = board.map(function (row: string[]) {
        return row.map(function (square: string) {
          if (square === 'x') {
            return 1;
          } else if (square === 'o') {
            return -1;
          } else {
            return 0;
          }
        });
      });

      let movesSoFar = 0;

      this._board.forEach(function (row) {
        row.forEach(function (square) {
          if (square !== 0) {
            movesSoFar++;
          }
        });
      });

      this._moveNumber = movesSoFar + 1;

      if (turn) {
        this._turn = turn === 'x' ? this._X : this._O;
      } else {
        this._turn = this._moveNumber % 2 === 0 ? this._O : this._X;
      }
    }
  }

  ascii() {
    console.log('Board is being displayed');

    // prettier-ignore
    const asciiBoard = `
        0   1   2
      +-----------+
    0 | ${this.getAsciiSquare(0, 0)} | ${this.getAsciiSquare(0, 1)} | ${this.getAsciiSquare(0, 2)} |
      |   |   |   | 
    1 | ${this.getAsciiSquare(1, 0)} | ${this.getAsciiSquare(1, 1)} | ${this.getAsciiSquare(1, 2)} |
      |   |   |   |
    2 | ${this.getAsciiSquare(2, 0)} | ${this.getAsciiSquare(2, 1)} | ${this.getAsciiSquare(2, 2)} |
      +-----------+
    `;

    console.log(asciiBoard);
  }

  clear() {
    this._board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  }

  get(x: number, y: number): 'x' | 'o' | '.' {
    if (this._board[x][y] === 1) {
      return 'x';
    } else if (this._board[x][y] === -1) {
      return 'o';
    } else {
      return '.';
    }
  }

  getBoard() {
    return this._board;
  }

  getAsciiSquare(x: number, y: number): 'x' | 'o' | '.' {
    if (this._board[x][y] === 1) {
      return 'x';
    } else if (this._board[x][y] === -1) {
      return 'o';
    } else {
      return '.';
    }
  }

  isGameOver(): boolean {
    return this.isWinner() || this.isBoardFull();
  }

  isWinner() {
    const lines = [
      // rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];

    const flatBoard = this._board.flat();

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        flatBoard[a] !== 0 &&
        flatBoard[a] === flatBoard[b] &&
        flatBoard[a] === flatBoard[c]
      ) {
        return true;
      }
    }

    return false;
  }

  isDraw(): boolean {
    return this.isBoardFull() && !this.isWinner();
  }

  history(): number[][] {
    return this._history;
  }

  moveNumber() {
    return this._moveNumber;
  }

  isBoardFull(): boolean {
    let boardFull = true;

    this._board.forEach(function (row) {
      row.forEach(function (square) {
        if (square === 0) {
          boardFull = false;
        }
      });
    });

    return boardFull;
  }

  move(x: number, y: number) {
    if (x < 0 || x > 2 || y < 0 || y > 2) {
      throw new Error('Invalid move');
    }

    if (this.isGameOver()) {
      throw new Error('Game is over');
    }

    if (this._board[x][y] !== 0) {
      throw new Error('Invalid move');
    }

    this._board[x][y] = this._turn;
    this._moveNumber = this._moveNumber + 1;
    this._turn = this._turn === this._X ? this._O : this._X;
    this._history.push([x, y]);
  }

  moves(): number[][] {
    const moves: number[][] = [];

    this._board.forEach(function (row, x) {
      row.forEach(function (square, y) {
        if (square === 0) {
          moves.push([x, y]);
        }
      });
    });

    return moves;
  }

  remove(x: number, y: number): 'x' | 'o' | null {
    const value = this.get(x, y);

    this._board[x][y] = 0;

    return value === '.' ? null : value;
  }

  turn() {
    return this._turn === this._X ? 'x' : 'o';
  }

  undo() {
    const lastMove = this._history.pop();

    if (!lastMove) {
      throw new Error('No moves to undo');
    }

    const [x, y] = lastMove;

    this._board[x][y] = 0;
    this._moveNumber = this._moveNumber - 1;
    this._turn = this._turn === this._X ? this._O : this._X;
  }
}
