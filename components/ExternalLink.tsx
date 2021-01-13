const ExternalLink: React.FC<{ href: string }> = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    children={children}
    className="hover:underline text-center"
  />
)
export default ExternalLink
