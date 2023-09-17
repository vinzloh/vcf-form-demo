import classNames from 'classnames';
import { type UseFormReturn } from 'react-hook-form';

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
      className={classNames(
        'text-red-700 text-xs m-1 bottom-0',
        'transform transition-transform ease-in duration-150',
        error ? 'relative translate-y-0' : 'absolute -translate-y-3',
        className,
      )}
    >
      {error?.toString()}
    </div>
  );
};
