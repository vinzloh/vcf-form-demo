import classNames from 'classnames'
import FormErrorLabel from 'components/FormErrorLabel'
import IFormControl from 'interfaces/FormControl'
import ReactDatePicker from 'react-datepicker'
import { Controller } from 'react-hook-form'
import styles from './DatePicker.module.scss'

type Props = IFormControl & {
  scrollMarginTop?: number
}

const DatePicker: React.FC<Props> = ({
  name,
  placeholder,
  control,
  errors = {},
  defaultValues = {},
  watch = () => {},
  scrollMarginTop = 0,
}) => {
  const fieldError = errors[name as keyof {}] as any
  const error = fieldError?.message
  const defaultValue = defaultValues[name as keyof {}] || null
  const hasError = !!(errors[name as keyof {}] as any)?.message
  const hasValue = !!watch(name)
  return (
    <Controller
      control={control}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue} // react-hook-form accepts Array<string>
      error={error}
      render={({ onChange, onBlur, value }) => {
        return (
          <div className={styles.layout}>
            <ReactDatePicker
              name={name}
              placeholderText={placeholder}
              autoComplete="off"
              dateFormat="dd-MM-yyyy"
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              className={classNames(
                styles.datepicker,
                hasError || !hasValue ? 'bg-gray-200' : 'bg-gray-100'
              )}
              popperModifiers={{
                preventOverflow: {
                  padding: { top: scrollMarginTop },
                  escapeWithReference: false,
                  boundariesElement: 'viewport',
                },
              }}
              showPopperArrow={false}
            />
            {error && <FormErrorLabel {...{ name, errors }} />}
          </div>
        )
      }}
    />
  )
}
export default DatePicker
