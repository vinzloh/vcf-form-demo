import { FormProvider, useForm } from 'react-hook-form';
import { match } from 'ts-pattern';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Personal } from './personal';
import { SignUp } from './signup';
import { More } from './more';
import { useGraduateFormValues } from './use-graduate-form-values';
import { useGraduateRoute } from './use-graduate-route';

// Astro roadmap to UI persistence https://github.com/withastro/roadmap/issues/532

const schema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  // text: Yup.string().required('This field is required'),
  // date: Yup.string().nullable().required('This field is required'),
  // prefix: Yup.string().required('Prefix is required'),
  // phone: Yup.string().required('Phone is required'),
  //
});

export function Graduate() {
  const graduateFormValues = useGraduateFormValues();
  const graduateRoute = useGraduateRoute();
  const formProps = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    values: graduateFormValues,
  });
  console.table(formProps.formState.errors);

  const Component = match(graduateRoute)
    .with('graduate', () => SignUp)
    .with('personal', () => Personal)
    .with('more', () => More)
    .otherwise(() => () => <></>);

  return (
    <FormProvider {...formProps}>
      <Component />
    </FormProvider>
  );
}
