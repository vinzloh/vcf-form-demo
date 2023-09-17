import classNames from 'classnames'

export type ButtonProps = JSX.IntrinsicElements['button']

const Button = ({
  type,
  children,
  onClick = () => {},
  className = 'px-3 py-1',
  disabled,
}: ButtonProps) => (
  <button
    type={type || 'button'}
    className={classNames(
      'py-2 px-5 select-none focus:outline-none focus:opacity-75 transform hover:shadow-md transition ease-in duration-150 rounded-md',
      disabled && 'opacity-50 cursor-default',
      className
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)
export default Button
