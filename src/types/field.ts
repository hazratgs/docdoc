interface IField {
  name: string
  value: string
}

export type CheckFieldType = {
  field: string,
  type: 'error' | 'checked' | 'clear'
}

export default IField
