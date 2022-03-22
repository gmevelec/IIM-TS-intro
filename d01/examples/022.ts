enum CellStatus {
  UnFlagged,
  Flagged
}

interface Cell {
  status: CellStatus
}

const getFlaggedCells = (): Array<Cell> => {
  const flaggedCells: Array<Cell> = []
  this.gameBoard.forEach((cell: Cell) => {
    if (cell.status === CellStatus.Flagged)
      flaggedCells.push(cell)
  })
  return flaggedCells
}