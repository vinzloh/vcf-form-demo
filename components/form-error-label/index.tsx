import classNames from 'classnames'
import FormControl from 'definitions/form-control'
import styles from './form-error-label.module.scss'

const FormErrorLabel = ({ name, errors = {}, className }: FormControl) => {
  const error = (errors[name as keyof {}] as any)?.message
  return (
    <div
      className={classNames(styles.error, className, error && styles.hasError)}
    >
      {error}
    </div>
  )
}
export default FormErrorLabel
