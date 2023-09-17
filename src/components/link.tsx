import classNames from 'classnames';

export type LinkProps = JSX.IntrinsicElements['a'];

export function Link({ href, target, children, className }: LinkProps) {
  const normalizedTo =
    href?.toString().replace('https://', '//').replace('http://', '//') ?? '';
  const normalizedTarget = normalizedTo.startsWith('//') ? '_blank' : target;

  return (
    <a
      href={href}
      target={normalizedTarget}
      rel={normalizedTarget === '_blank' ? 'noopener noreferrer' : undefined}
      className={classNames(
        'whitespace-no-wrap text-center',
        'transition duration-100',
        'hover:underline hover:opacity-75',
        className,
      )}
    >
      {children}
    </a>
  );
}
