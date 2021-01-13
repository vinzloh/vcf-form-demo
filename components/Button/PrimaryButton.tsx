import Button, { IButton } from './Button'
import classNames from 'classnames'

const PrimaryButton: React.FC<IButton> = ({ className, ...props }) => (
  <Button
    className={classNames('bg-primary text-white', className)}
    {...props}
  />
)
export default PrimaryButton
