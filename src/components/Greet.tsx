type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props
  return (
    <div>
      <h2>HELLO {props.name}</h2>
      <h2>You have {messageCount}</h2>
      <h1>{props.isLoggedIn ? "WELCOME" : "GUEST"}</h1>
    </div>
  )
}

export default Greet
