export class Game {
  constructor(
    initialState = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
  ) {
    this.initialState = initialState;
    this.state = JSON.parse(JSON.stringify(initialState));
    this.status = Game.STATUS_IDLE;
    this.score = 0;
  }

  static STATUS_IDLE = "idle";
  static STATUS_PLAYING = "playing";
  static STATUS_WIN = "win";
  static STATUS_LOSE = "lose";

  moveLeft() {
    const state = this.getState();

    for (let row = 0; row < 4; row++) {
      const cache = [];

      for (let cell = 0; cell < 4; cell++) {
        const currentDigit = state[row][cell];

        if (!currentDigit) {
          continue;
        }

        cache.push(currentDigit);
      }

      for (let i = 0; i < cache.length; i++) {
        const currentDigit = cache[i];
        const nextDigit = i + 1 < cache.length ? cache[i + 1] : null;

        if (!nextDigit) {
          break;
        }

        if (currentDigit === nextDigit) {
          const prevScore = this.getScore();
          const currentScore = prevScore + currentDigit * 2;

          this.score = currentScore;

          cache.splice(i, 2, currentDigit * 2);
        }
      }

      if (cache.length === 4) {
        continue;
      }

      while (cache.length < 4) {
        cache.push(0);
      }

      for (let cell = 0; cell < 4; cell++) {
        state[row][cell] = cache[cell];
      }
    }
  }

  moveRight() {
    this.reverseStateByRows();
    this.moveLeft();
    this.reverseStateByRows();
  }

  moveUp() {
    this.rotateStateBackwardBy90Deg();
    this.moveLeft();
    this.rotateStateForwardBy90Deg();
  }

  moveDown() {
    this.rotateStateForwardBy90Deg();
    this.moveLeft();
    this.rotateStateBackwardBy90Deg();
  }

  getScore() {
    return this.score;
  }

  getState() {
    return this.state;
  }

  getStatus() {
    return this.status;
  }

  start() {
    this.state = JSON.parse(JSON.stringify(this.initialState));
    this.status = Game.STATUS_PLAYING;
    this.score = 0;
    this.addRandomDigitToEmptyCell(2);
  }

  restart() {
    this.state = JSON.parse(JSON.stringify(this.initialState));
    this.status = Game.STATUS_IDLE;
    this.score = 0;
  }

  rotateStateBackwardBy90Deg() {
    const state = this.getState();
    const stateCopy = JSON.parse(JSON.stringify(state));

    for (let j = 3; j >= 0; j--) {
      for (let i = 0; i < 4; i++) {
        state[3 - j][i] = stateCopy[i][j];
      }
    }
  }

  rotateStateForwardBy90Deg() {
    const state = this.getState();
    const stateCopy = JSON.parse(JSON.stringify(state));

    for (let i = 3; i >= 0; i--) {
      for (let j = 0; j < 4; j++) {
        state[j][3 - i] = stateCopy[i][j];
      }
    }
  }

  reverseStateByRows() {
    const state = this.getState();

    for (let row = 0; row < 4; row++) {
      state[row].reverse();
    }
  }

  checkIsPlayerWin() {
    const state = this.getState();
    let isPlayerWin = false;

    for (let row = 0; row < 4; row++) {
      if (state[row].includes(2048)) {
        isPlayerWin = true;
      }
    }

    return isPlayerWin;
  }

  checkIsPlayerLose() {
    const state = this.getState();

    let isPlayerLose = false;
    let hasEmptyCell = false;
    let hasPairedDigits = false;

    for (let row = 0; row < 4; row++) {
      if (state[row].includes(0)) {
        hasEmptyCell = true;

        break;
      }
    }

    for (let row = 0; row < 4; row++) {
      for (let cell = 0; cell < 3; cell++) {
        if (state[row][cell] === state[row][cell + 1]) {
          hasPairedDigits = true;

          break;
        }
      }
    }

    for (let col = 0; col < 4; col++) {
      for (let row = 0; row < 3; row++) {
        if (state[row][col] === state[row + 1][col]) {
          hasPairedDigits = true;

          break;
        }
      }
    }

    if (!hasEmptyCell && !hasPairedDigits) {
      isPlayerLose = true;
    }

    return isPlayerLose;
  }

  addRandomDigitToEmptyCell(digitsCount) {
    const state = this.getState();
    let addedDigitsCount = 0;

    while (addedDigitsCount < digitsCount) {
      const [row, cell] = this.getRandomCoordinates();
      const randomDigit = this.getRandomDigit();

      if (state[row][cell]) {
        continue;
      }

      state[row][cell] = randomDigit;

      addedDigitsCount++;
    }
  }

  getRandomCoordinates() {
    const rowCoordinate = Math.floor(Math.random() * 4);
    const cellCoordinate = Math.floor(Math.random() * 4);

    return [rowCoordinate, cellCoordinate];
  }

  getRandomDigit() {
    const randomNumber1To100 = Math.floor(Math.random() * 100) + 1;

    if (randomNumber1To100 > 90) {
      return 4;
    }

    return 2;
  }
}
