import styles from './TextField.module.scss'
import IFormControl from 'interfaces/FormControl'
import FormErrorLabel from 'components/FormErrorLabel'
import classNames from 'classnames'
import { Ref } from 'react'

const TextField: React.FC<
  {
    label?: string
    type?: string
    disabled?: boolean
    inputClassName?: string
    hideError?: boolean
    parentRef?: Ref<any>
  } & IFormControl
> = ({
  name,
  label,
  placeholder,
  type = 'text',
  parentRef,
  registerSharedRef = () => {},
  register,
  errors = {},
  defaultValues = {},
  disabled,
  className,
  inputClassName,
  hideError = false,
  watch = () => {},
}) => {
  const labelId = `label-${name}`
  const inputId = `input-${name}`
  const hasError = !!(errors[name as keyof {}] as any)?.message
  const hasValue = !!watch(name)

  return (
    <div className={classNames(styles.layout, className)}>
      <label id={labelId} htmlFor={inputId}>
        {label || placeholder}
      </label>
      <input
        id={inputId}
        name={name}
        autoComplete="off"
        type={type}
        aria-labelledby={labelId}
        placeholder={placeholder || label}
        ref={parentRef ? registerSharedRef(parentRef) : register}
        defaultValue={defaultValues[name as keyof {}] ?? ''}
        disabled={disabled}
        className={classNames(
          inputClassName,
          hasError || !hasValue ? 'bg-gray-200' : 'bg-gray-100'
        )}
      />
      {!hideError && <FormErrorLabel {...{ name, errors }} />}
    </div>
  )
}
export default TextField
