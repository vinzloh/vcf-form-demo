import TextField from 'components/text-field'
import IFormControl from 'interfaces/form-control'
import FormErrorLabel from 'components/form-error-label'

const PhoneNumber: React.FC<{
  defaultValues?: object
  prefix?: IFormControl
  phone?: IFormControl
}> = ({ defaultValues, prefix = {}, phone = {} }) => {
  const errors = prefix.errors
  const prefixError = errors?.[prefix.name as keyof {}]
  const phoneError = errors?.[phone.name as keyof {}]
  const name = (prefixError && prefix.name) || (phoneError && phone.name) || ''
  return (
    <div className="grid grid-cols-12">
      <TextField
        name={prefix.name || 'prefix'}
        placeholder={prefix.placeholder || 'Prefix'}
        className="col-span-3"
        inputClassName="rounded-r-none border-r-0 focus:border-r"
        defaultValues={defaultValues}
        hideError={true}
        {...prefix}
      />
      <TextField
        name={phone.name || 'phone'}
        placeholder={phone.placeholder || 'Phone number'}
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
