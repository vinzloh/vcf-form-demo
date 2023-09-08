import classNames from 'classnames';
import { type UseFormReturn } from 'react-hook-form';

import styles from './form-error-label.module.scss';

type FormErrorLabelProps = {
  name: string;
  className?: string;
  errors: UseFormReturn['formState']['errors'];
};

export const FormErrorLabel = ({
  name,
  errors,
  className,
}: FormErrorLabelProps) => {
  const error = errors[name]?.message;
  return (
    <div
      className={classNames(styles.error, className, error && styles.hasError)}
    >
      {error?.toString()}
    </div>
  );
};
