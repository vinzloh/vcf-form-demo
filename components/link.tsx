import NextLink from 'next/link'
import classNames from 'classnames'

export interface ILink {
  href: string
  className?: string
}
const Link: React.FC<ILink> = ({ href, children, className }) => (
  <NextLink href={href}>
    <a
      className={classNames(
        'whitespace-no-wrap text-center px-3 py-1 hover:opacity-75 transition duration-100',
        className
      )}
    >
      {children}
    </a>
  </NextLink>
)
export default Link
