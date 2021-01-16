import classNames from 'classnames'
import IFormControl from 'interfaces/form-control'
import styles from './form-error-label.module.scss'

const FormErrorLabel: React.FC<IFormControl> = ({
  name,
  errors = {},
  className,
}) => {
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
