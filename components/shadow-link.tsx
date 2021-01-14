import Link, { ILink } from 'components/link'

const ShadowLink: React.FC<ILink> = ({ href, children }) => (
  <Link
    className="rounded-full shadow hover:shadow-md transition duration-150 ease-in"
    href={href}
    children={children}
  />
)
export default ShadowLink
