import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form';
import ReactSelect, {
  type GroupBase,
  type Props,
  type Theme,
} from 'react-select';
import resolveConfig from 'tailwindcss/resolveConfig';
import type { RecursiveKeyValuePair } from 'tailwindcss/types/config';

import tailwindConfig from '@/../tailwind.config';
import { FormErrorLabel } from '@/components/form-error-label';

const tailwindTheme = resolveConfig(tailwindConfig).theme;

type KeyValue = RecursiveKeyValuePair;

export interface SelectProps<
  TFieldValues extends FieldValues,
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends Pick<UseControllerProps<TFieldValues>, 'name' | 'control'>,
    Omit<Props<Option, IsMulti, Group>, 'name'> {
  loadingMessage?: () => string;
}

export function Select<
  TFieldValues extends FieldValues,
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  name,
  placeholder,
  control,
  options = [],
  loadingMessage = () => 'Loading...',
}: SelectProps<TFieldValues, Option, IsMulti, Group>) {
  const { field, formState } = useController({
    name,
    control,
  });
  const getOptionByValue = (value: string) =>
    options.filter((option) => value?.includes((option as any)?.value));
  const { errors } = formState;
  const isMultiple = Array.isArray(field.value);

  return (
    <>
      <div>
        <ReactSelect
          inputId={name}
          {...field}
          theme={(theme) =>
            (tailwindTheme
              ? {
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: theme.colors.neutral5,
                    neutral30: (
                      tailwindTheme.borderColor?.gray as KeyValue
                    )[400],
                    primary: 'transparent',
                  },
                }
              : {}) as Theme
          }
          styles={{
            control: (provided, state) =>
              tailwindTheme
                ? {
                    ...provided,
                    minHeight: '40px',
                    borderColor: 'transparent',
                    borderRadius: (tailwindTheme.borderRadius as KeyValue).sm,
                    backgroundColor: (
                      tailwindTheme.backgroundColor?.gray as KeyValue
                    )[state.isFocused || state.hasValue ? 100 : 200],
                  }
                : {},
            placeholder: (provided) => ({
              ...provided,
              color: (tailwindTheme?.colors?.gray as KeyValue)[500] as string,
              whiteSpace: 'nowrap',
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              backgroundColor: 'transparent',
            }),
            option: (provided, state) =>
              tailwindTheme
                ? {
                    ...provided,
                    color:
                      (state.isSelected && tailwindTheme.colors?.white) ||
                      tailwindTheme.colors?.black,
                    backgroundColor:
                      (state.isSelected && tailwindTheme.colors?.primary) ||
                      (state.isFocused && state.theme.colors.neutral5) ||
                      'transparent',
                  }
                : {},
          }}
          options={options}
          isLoading={options.length === 0}
          loadingMessage={loadingMessage}
          // react-select accepts value as { label, value }
          value={
            isMultiple
              ? getOptionByValue(field.value)
              : getOptionByValue(field.value)[0] || ''
          }
          placeholder={placeholder}
          isMulti={isMultiple}
          // map back to Array<string>
          onChange={(option: any) =>
            isMultiple
              ? field.onChange(option.map((d: any) => d.value))
              : field.onChange(option.value)
          }
        />
        {errors[name] && <FormErrorLabel name={name} errors={errors} />}
      </div>
    </>
  );
}
