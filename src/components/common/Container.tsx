import { ReactElement } from "react"

type ContainerProps = { children: ReactElement }

const Container = ({ children }: ContainerProps) => {
  return <div className="md:w-1/2 sm:w-2/3 md:h-56 w-full h-48">{children}</div>
}

export default Container
