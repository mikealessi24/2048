import Tile from "@/components/Tile"
import { Fragment } from "react"

const Board = () => {
  const arr = [
    [4, 128, 256, 2],
    [0, 8, 0, 512],
    [1024, 16, 0, 32],
    [2048, 0, 0, 64],
  ]

  return (
    <div className="mx-2 md:h-512 md:w-full md:max-w-lg w-96 h-96 bg-stone-400 rounded-md">
      {arr.map((row, i) => (
        <div key={i} className="flex w-full justify-center">
          {row.map((tile, i) => (
            <Fragment key={i}>
              <Tile tile={tile} />
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
