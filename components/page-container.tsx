import classNames from 'classnames'

function PageContainer({ className, ...props }: JSX.IntrinsicElements['div']) {
  return (
    <div
      className={classNames('container mx-auto px-10 lg:px-12', className)}
      {...props}
    />
  )
}
export default PageContainer
