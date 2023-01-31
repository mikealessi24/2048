import colorMap from "@/constants/colors"
import { useMemo } from "react"

type TileProps = { tile: number }

const Tile = ({ tile }: TileProps) => {
  const textColor = tile > 4 ? "text-white" : "text-stone-500"
  const bgColor = useMemo(() => {
    return colorMap[tile]
  }, [tile])

  return (
    <div
      className={`md:w-28 w-22 md:h-28 h-22 md:m-2 m-1 rounded-md flex justify-center items-center ${bgColor}`}
    >
      <h1 className={`text-4xl font-semibold ${textColor}`}>{tile}</h1>
    </div>
  )
}

export default Tile
