import classNames from 'classnames';
import * as React from 'react';
import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form';

import { FormErrorLabel } from '@/components/form-error-label';

import styles from './text-field.module.scss';

type InputProps = Omit<JSX.IntrinsicElements['input'], 'name'>;

export interface TextFieldProps<TFieldValues extends FieldValues>
  extends InputProps,
    Pick<UseControllerProps<TFieldValues>, 'name' | 'control'> {
  label?: string;
  inputClassName?: string;
  hideError?: boolean;
}
export const TextField = React.forwardRef(
  <TFieldValues extends FieldValues>(
    props: TextFieldProps<TFieldValues>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const {
      name,
      label = name,
      className,
      inputClassName,
      hideError = false,
      control,
      ...inputProps
    } = props;
    const { field, formState } = useController({
      name,
      control,
    });

    const { errors } = formState;
    const hasError = !!errors[name]?.message;
    const hasValue = !!field.value;

    return (
      <div className={classNames(styles.layout, className)}>
        <label id="yolo" htmlFor={name}>
          {label}
        </label>
        <input
          id={name}
          autoComplete="off"
          {...inputProps}
          {...field}
          ref={(e) => {
            field.ref(e);
            return ref;
          }}
          value={field.value ?? ''}
          className={classNames(
            inputClassName,
            hasError || !hasValue ? 'bg-gray-200' : 'bg-gray-100',
          )}
        />
        {!hideError && <FormErrorLabel name={name} errors={errors} />}
      </div>
    );
  },
);
