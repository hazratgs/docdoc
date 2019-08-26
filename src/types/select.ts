interface ISelect {
  title: string
  values: string[]
  handle: (value: string) => void
}

export default ISelect
