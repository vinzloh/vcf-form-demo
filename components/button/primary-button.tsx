import Button, { IButton } from './button'
import classNames from 'classnames'

const PrimaryButton: React.FC<IButton> = ({ className, ...props }) => (
  <Button
    className={classNames('bg-primary text-white', className)}
    {...props}
  />
)
export default PrimaryButton
