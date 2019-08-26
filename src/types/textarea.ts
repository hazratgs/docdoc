interface ITextarea {
  title: string
  placeholder: string
  value?: string
  checked: boolean
  error: boolean
  handle: (value: string) => void
}

export default ITextarea
