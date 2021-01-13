import Button, { IButton } from './Button'
import classNames from 'classnames'

const TextButton: React.FC<IButton> = ({ className, ...props }) => (
  <Button
    className={classNames(
      'text-secondary rounded-md hover:shadow-md bg-transparent transition duration-150 ease-in',
      className
    )}
    {...props}
  />
)
export default TextButton
