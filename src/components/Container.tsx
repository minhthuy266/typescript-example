import React from "react"

type ContainerProps = {
  styles: React.CSSProperties
}

const Container = (props: ContainerProps) => {
  return <div style={props.styles}>TEXT CONTENT GOES HERE</div>
}

export default Container
