import classNames from 'classnames';
import ReactDatePicker, { type ReactDatePickerProps } from 'react-datepicker';
import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form';

import { FormErrorLabel } from '@/components/form-error-label';

import './index.css';

interface DatePickerProps<TFieldValues extends FieldValues>
  extends Omit<ReactDatePickerProps, 'name' | 'onChange'>,
    Pick<UseControllerProps<TFieldValues>, 'name' | 'control'> {}

export function DatePicker<TFieldValues extends FieldValues>(
  props: DatePickerProps<TFieldValues>,
) {
  const { name, control, ...datePickerProps } = props;
  const { field, formState } = useController({
    name,
    control,
  });
  const { errors } = formState;
  const hasError = !!errors[name]?.message;
  const hasValue = !!field.value;

  return (
    <div data-date-picker className="flex flex-col">
      <ReactDatePicker
        showPopperArrow={false}
        autoComplete="off"
        dateFormat="dd-MM-yyyy"
        {...datePickerProps}
        {...field}
        selected={field.value}
        className={classNames(
          'w-full h-10 rounded-sm px-3 outline-none',
          'focus:bg-gray-100',
          hasError || !hasValue ? 'bg-gray-200' : 'bg-gray-100',
        )}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, -6],
            },
          },
        ]}
      />
      {hasError && <FormErrorLabel name={name} errors={errors} />}
    </div>
  );
}
