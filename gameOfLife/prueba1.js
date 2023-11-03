const cellAlive = 1;
const cellDied = 0;

let rangeInput = document.getElementById("range");

const board = document.querySelector(".container");
let intervalID = null;

let boardSize = 10;

let cellSize = 400 / boardSize;

let firstGame = buildEmptyBoard(boardSize);

let nextGeneration = buildEmptyBoard(boardSize);

printTable(firstGame);

function printTable(table) {
  board.innerHTML = "";
  for (let i = 0; i < table.length; i++) {
    const currentRow = table[i];
    const row = document.createElement("div");
    row.classList.add("row");

    board.appendChild(row);

    for (let j = 0; j < currentRow.length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("celda");
      cell.style.width = cellSize + "px";
      cell.style.height = cellSize + "px";

      cell.addEventListener("click", () => {
        if (firstGame[i][j] === cellAlive) {
          firstGame[i][j] = cellDied;
        } else {
          firstGame[i][j] = cellAlive;
        }

        printTable(firstGame);
      });

      if (table[i][j] === cellAlive) {
        cell.classList.add("celda--alive");
      }

      row.appendChild(cell);
    }
  }
}

printTable(firstGame);

function contarVecinos(row, col) {
  let totalVecinos = 0;

  const previous = firstGame[row - 1] || [];
  const current = firstGame[row];
  const next = firstGame[row + 1] || [];

  totalVecinos += previous[col - 1] || 0;
  totalVecinos += previous[col] || 0;
  totalVecinos += previous[col + 1] || 0;

  totalVecinos += current[col - 1] || 0;
  totalVecinos += current[col + 1] || 0;

  totalVecinos += next[col - 1] || 0;
  totalVecinos += next[col] || 0;
  totalVecinos += next[col + 1] || 0;

  return totalVecinos;
}

function applyRulesToCell(row, col) {
  const vecinosVivos = contarVecinos(row, col);
  const celdaActual = firstGame[row][col];

  let nextCellState = 0;

  if ((vecinosVivos === 2 || vecinosVivos === 3) && celdaActual === 1) {
    nextCellState = 1;
  }

  if (vecinosVivos === 3 && celdaActual === 0) {
    nextCellState = 1;
  }

  nextGeneration[row][col] = nextCellState;
}

function calculateNextGeneration() {
  for (let i = 0; i < firstGame.length; i++) {
    const element = firstGame[i];

    for (let j = 0; j < element.length; j++) {
      applyRulesToCell(i, j);
    }
  }
}

function copyBoard(boardToCopy) {
  const newBoard = [];

  for (let i = 0; i < boardToCopy.length; i++) {
    const currentRow = boardToCopy[i];

    const newRow = [];
    for (let j = 0; j < currentRow.length; j++) {
      const currentCell = currentRow[j];
      newRow.push(currentCell);
    }

    newBoard.push(newRow);
  }

  return newBoard;
}

function buildEmptyBoard(size) {
  const emptyBoard = [];

  for (let i = 0; i < size; i++) {
    const emptyRow = [];

    for (let j = 0; j < size; j++) {
      emptyRow.push(0);
    }
    emptyBoard.push(emptyRow);
  }

  return emptyBoard;
}

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  intervalID = setInterval(() => {
    calculateNextGeneration();
    printTable(nextGeneration);

    firstGame = copyBoard(nextGeneration);
    nextGeneration = buildEmptyBoard(boardSize);
  }, 250);
});

function handleStop() {
  clearInterval(intervalID);
}

rangeInput.addEventListener("change", function () {
  boardSize = rangeInput.value;

  document.getElementById("rangeNumber").innerHTML = boardSize;

  cellSize = 400 / boardSize;

  firstGame = buildEmptyBoard(boardSize);

  nextGeneration = buildEmptyBoard(boardSize);

  printTable(firstGame);
});
