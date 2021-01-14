import FormControl from 'definitions/form-control'
import FormErrorLabel from 'components/form-error-label'
import { ReactNode } from 'react'

type Props = FormControl & { children: ReactNode }

const Checkbox = ({
  name,
  children,
  register,
  errors,
  defaultValues = {},
}: Props) => (
  <div>
    <label className="flex items-center">
      <input
        name={name}
        type="checkbox"
        className="mr-3"
        ref={register}
        defaultChecked={defaultValues[name as keyof {}] ?? false}
      />
      {children}
    </label>
    <FormErrorLabel {...{ name, errors }} />
  </div>
)

export default Checkbox
