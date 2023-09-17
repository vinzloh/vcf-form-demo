import type IFormControl from 'interfaces/form-control';
import FormErrorLabel from 'components/form-error-label';
import * as React from 'react';

const Checkbox = ({
  name,
  children,
  register,
  errors,
  defaultValues = {},
}: IFormControl & { children: React.ReactNode }) => (
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
);

export default Checkbox;
