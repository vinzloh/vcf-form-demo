import type { FieldValues, UseFormReturn } from 'react-hook-form';

import { FormErrorLabel } from '@/components/form-error-label';
import { TextField, type TextFieldProps } from '@/components/text-field';

export interface PhoneNumberProps<TFieldValues extends FieldValues>
  extends Pick<UseFormReturn<TFieldValues>, 'control'> {
  prefix: { name: TextFieldProps<TFieldValues>['name']; placeholder?: string };
  phone: { name: TextFieldProps<TFieldValues>['name']; placeholder?: string };
  errors: UseFormReturn<TFieldValues>['formState']['errors'];
}

export function PhoneNumber<TFieldValues extends FieldValues>({
  prefix,
  phone,
  errors,
  control,
}: PhoneNumberProps<TFieldValues>) {
  const prefixError = errors?.[prefix.name];
  const phoneError = errors?.[phone.name];

  return (
    <div className="grid grid-cols-12">
      <TextField
        placeholder={prefix?.placeholder ?? 'Prefix'}
        className="col-span-3"
        inputClassName="rounded-r-none"
        hideError={true}
        {...prefix}
        control={control}
        name={prefix.name}
      />
      <TextField
        placeholder={phone?.placeholder ?? 'Phone number'}
        className="col-span-9"
        inputClassName="rounded-l-none"
        control={control}
        hideError={true}
        {...phone}
        name={phone.name}
      />
      <FormErrorLabel
        className="whitespace-no-wrap"
        name={
          (prefixError && prefix?.name) || (phoneError && phone?.name) || ''
        }
        errors={errors}
      />
    </div>
  );
}
