import { CheckFieldType } from '../types/field'

interface IFieldType extends CheckFieldType {
  errors: string[],
  checked: string[]
}

const fieldValidation = (props: IFieldType) => {
  let { field, type, errors, checked } = props
  const t = (items: string[]): string[] =>
    items.filter((item: string) => item !== field)

  if (type === 'checked') {
    errors = t(errors)
    if (!checked.includes(field)) checked.push(field)
  } else if (type === 'error') {
    checked = t(checked)
    if (!errors.includes(field)) errors.push(field)
  } else if (type === 'clear') {
    checked = t(checked)
    errors = t(errors)
  }

  return {
    checked,
    errors
  }
}

export default fieldValidation