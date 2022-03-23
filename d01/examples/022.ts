interface Cell {
  isFlagged(): boolean
}

const getFlaggedCells = (): Array<Cell> => {
  const flaggedCells: Array<Cell> = []
  this.gameBoard.forEach((cell: Cell) => {
    if (cell.isFlagged)
      flaggedCells.push(cell)
  })
  return flaggedCells
}
