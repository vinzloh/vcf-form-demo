import classNames from 'classnames'

const PageContainer: React.FC<{ className?: string }> = ({
  className,
  ...props
}) => (
  <div
    className={classNames('container mx-auto px-10 lg:px-12', className)}
    {...props}
  />
)
export default PageContainer
