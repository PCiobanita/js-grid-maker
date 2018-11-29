document.addEventListener('DOMContentLoaded', function () {
  // Add code here
  const board = document.getElementById('board');
  const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  const createGrid = (rows, column) => {
    for (i = 1; i <= rows; i++) {
      const cellrow = document.createElement("div");
      cellrow.setAttribute("class", "row");
      board.appendChild(cellrow)
      cell.addEventListener("click", () => {
        cell.style.backgroundColor = getRandomColor();
      })

      for (j = 1; j <= column; j++) {
        const cell = document.createElement("div")
        cell.setAttribute("class", "col");
        cellrow.appendChild(cell)
        cell.addEventListener("click", () => {
          cell.style.backgroundColor = getRandomColor();
        })

      }

    }
  }

  createGrid(4, 6)
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = "white"
  })
});
