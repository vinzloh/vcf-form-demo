import classNames from 'classnames'
import Button, { type ButtonProps } from './button'

const PrimaryButton = ({ className, ...props }: ButtonProps) => (
  <Button
    className={classNames('bg-primary text-white', className)}
    {...props}
  />
)
export default PrimaryButton
