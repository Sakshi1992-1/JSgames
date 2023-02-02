var squares = document.querySelectorAll(".square");
var currentPlayer = "X";
var gameOver = false;

var winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (this.textContent === "" && !gameOver) {
      this.textContent = currentPlayer;

      for (var j = 0; j < winningCombinations.length; j++) {
        var combination = winningCombinations[j];
        var a = combination[0];
        var b = combination[1];
        var c = combination[2];

        if (
          squares[a].textContent === currentPlayer &&
          squares[b].textContent === currentPlayer &&
          squares[c].textContent === currentPlayer
        ) {
          gameOver = true;
          alert(currentPlayer + " wins!");
        }
      }

      if (!gameOver) {
        if (currentPlayer === "X") {
          currentPlayer = "O";
        } else {
          currentPlayer = "X";
        }
      }
    }
  });
}
