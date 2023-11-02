const board = document.querySelector(".container");

let firstGame = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

let nextGeneration = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
const cellAlive = 1;
const cellDied = 0;

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

      cell.addEventListener("click", () => {
        if (table[i][j] === cellAlive) {
          table[i][j] = cellDied;
        } else {
          table[i][j] = cellAlive;
        }

        printTable(table);
        calculateNextGeneration();
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

  console.log(nextGeneration);
}

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  calculateNextGeneration();
  printTable(nextGeneration);
});
