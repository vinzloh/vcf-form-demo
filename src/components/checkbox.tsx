import {
  useController,
  type FieldValues,
  type UseControllerProps,
  type UseFormReturn,
} from 'react-hook-form';

import { FormErrorLabel } from '@/components/form-error-label';

export interface CheckboxProps<TFieldValues extends FieldValues = FieldValues>
  extends Pick<JSX.IntrinsicElements['label'], 'children'>,
    Pick<UseControllerProps<TFieldValues>, 'name'>,
    Pick<UseFormReturn<TFieldValues>, 'control'>,
    Pick<UseFormReturn<TFieldValues>['formState'], 'errors'> {}

export function Checkbox<TFieldValues extends FieldValues>({
  name,
  children,
  errors,
  control,
}: CheckboxProps<TFieldValues>) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <div>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-3"
          {...field}
          checked={field.value ?? false}
        />
        {children}
      </label>
      <FormErrorLabel name={name} errors={errors} />
    </div>
  );
}
