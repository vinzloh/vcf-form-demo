import classNames from 'classnames';

import { Button, type ButtonProps } from './button';

export const PrimaryButton = ({ className, ...props }: ButtonProps) => (
  <Button
    className={classNames('bg-primary text-white', className)}
    {...props}
  />
);
