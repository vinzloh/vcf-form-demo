import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
}

const ExternalLink = ({ children, href }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    children={children}
    className="hover:underline text-center"
  />
)
export default ExternalLink
