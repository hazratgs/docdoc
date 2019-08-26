interface IInput {
  type: 'text' | 'mobile'
  title: string
  placeholder: string
  value?: string
  checked: boolean
  error: boolean
  mask: string
  handle: (value: string) => void
}

export default IInput
