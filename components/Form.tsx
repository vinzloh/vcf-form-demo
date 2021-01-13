import classNames from 'classnames'

const Form: React.FC<{ className?: string }> = ({
  children,
  className = 'max-w-xs px-4 py-6 bg-white shadow-md',
}) => (
  <form
    onSubmit={(e) => e.preventDefault()}
    className={classNames('gap-2 grid grid-cols-1', className)}
    children={children}
  />
)
export default Form
