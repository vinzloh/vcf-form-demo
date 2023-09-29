import classNames from 'classnames';

import { Button, type ButtonProps } from './button';

export const TextButton = ({ className, ...props }: ButtonProps) => (
  <Button
    className={classNames(
      'text-secondary rounded-md hover:shadow-md bg-transparent transition duration-150 ease-in',
      className,
    )}
    {...props}
  />
);
