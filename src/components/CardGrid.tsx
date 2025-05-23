import type { PropsWithChildren } from "react"

const CardGrid = ({
  children,
  cols = 2
}: {
  cols?: number
} & PropsWithChildren) => {
  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
      }}
    >
      {children}
    </div>
  )
}

export default CardGrid
