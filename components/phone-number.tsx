import FormErrorLabel from 'components/form-error-label'
import TextField from 'components/text-field'
import FormControl from 'definitions/form-control'

type Props = {
  defaultValues?: object
  prefix?: FormControl
  phone?: FormControl
}

const PhoneNumber = ({ defaultValues, prefix, phone }: Props) => {
  const errors = prefix?.errors
  const prefixError = errors?.[prefix?.name as keyof {}]
  const phoneError = errors?.[phone?.name as keyof {}]
  const name =
    (prefixError && prefix?.name) || (phoneError && phone?.name) || ''
  return (
    <div className="grid grid-cols-12">
      <TextField
        name={prefix?.name || 'prefix'}
        placeholder={prefix?.placeholder || 'Prefix'}
        className="col-span-3"
        inputClassName="rounded-r-none border-r-0 focus:border-r"
        defaultValues={defaultValues}
        hideError={true}
        {...prefix}
      />
      <TextField
        name={phone?.name || 'phone'}
        placeholder={phone?.placeholder || 'Phone number'}
        className="col-span-9"
        inputClassName="rounded-l-none"
        defaultValues={defaultValues}
        hideError={true}
        {...phone}
      />
      <FormErrorLabel {...{ name, errors, className: 'whitespace-no-wrap' }} />
    </div>
  )
}
export default PhoneNumber
