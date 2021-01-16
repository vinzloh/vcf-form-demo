import FormErrorLabel from 'components/form-error-label'
import IFormControl from 'interfaces/form-control'
import { Ref, useRef } from 'react'
import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import tailwindConfig from 'tailwind.config.js'
import resolveConfig from 'tailwindcss/resolveConfig'
import { assignSharedDOMRefs } from 'helpers'

const tailwindTheme = resolveConfig(tailwindConfig).theme

const customTheme = (theme: any) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary25: theme.colors.neutral5,
    neutral30: tailwindTheme.borderColor.gray[400],
    primary: 'transparent',
  },
})

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    minHeight: '40px',
    borderColor: 'transparent',
    borderRadius: tailwindTheme.borderRadius.sm,
    backgroundColor:
      state.isFocused || state.hasValue
        ? tailwindTheme.backgroundColor.gray[100]
        : tailwindTheme.backgroundColor.gray[200],
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: tailwindTheme.colors.gray[500],
    whiteSpace: 'nowrap',
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    backgroundColor: 'transparent',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color:
      (state.isSelected && tailwindTheme.colors.white) ||
      tailwindTheme.colors.black,
    backgroundColor:
      (state.isSelected && tailwindTheme.colors.primary) ||
      (state.isFocused && state.theme.colors.neutral5) ||
      'transparent',
  }),
}

interface ISelect {
  values: Array<{}>
  creatable?: boolean
  loadingMessage?: () => string
  parentRef?: Ref<any>
}

const Select: React.FC<ISelect & IFormControl> = ({
  name,
  placeholder,
  control,
  parentRef,
  errors = {},
  values = [],
  defaultValues = {},
  creatable = false,
  loadingMessage = () => 'Loading...',
}) => {
  const getOptionByValue = (value: any) =>
    values.filter((option: any) => value.includes(option.value))
  const formValue = defaultValues[name as keyof {}]
  const fieldError = errors[name as keyof {}] as any
  // why selectedValues vs defaultValue - https://github.com/JedWatson/react-select/issues/2920#issuecomment-413732500
  const isMultiple = Array.isArray(formValue)
  const selectedValues: Array<string> | string =
    formValue || (isMultiple ? [] : '')
  // const Select = creatable ? CreatableSelect : ReactSelect
  const Select = ReactSelect
  const error = fieldError?.message
  const selectRef = useRef<any>()

  return (
    <Controller
      control={control}
      name={name}
      placeholder={placeholder}
      values={values}
      defaultValue={selectedValues} // react-hook-form accepts Array<string>
      error={error}
      onFocus={() => selectRef.current?.select?.focus()}
      render={({ onChange, onBlur, value }) => {
        const selectValue =
          (creatable &&
            value.map((value: string) => ({ label: value, value }))) ||
          (isMultiple
            ? getOptionByValue(value)
            : getOptionByValue(value)[0] || '')

        return (
          <div>
            <Select
              inputId={name}
              name={name}
              ref={assignSharedDOMRefs(parentRef, selectRef)}
              theme={customTheme}
              styles={customStyles}
              options={values}
              isLoading={creatable ? false : values.length === 0}
              loadingMessage={loadingMessage}
              // react-select accepts value as { label, value }
              value={selectValue}
              placeholder={placeholder}
              isMulti={isMultiple}
              onBlur={onBlur}
              // map back to Array<string>
              onChange={(values: any) =>
                isMultiple
                  ? onChange((values ?? []).map((d: any) => d.value))
                  : onChange(values.value)
              }
            />
            {error && <FormErrorLabel {...{ name, errors }} />}
          </div>
        )
      }}
    />
  )
}
export default Select
