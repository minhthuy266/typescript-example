import { Name } from "./types/Person.types"

type PersonListProps = {
  names: Name[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h1 key={name.first}>
            {name.first} {name.last}
          </h1>
        )
      })}
    </div>
  )
}

export default PersonList
