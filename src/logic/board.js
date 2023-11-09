import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardCheck[a] &&
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c]
      ) {
        return boardCheck[a]
      }
    }
    return null
  }

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)
  }