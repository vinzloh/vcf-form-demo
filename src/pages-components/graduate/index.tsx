import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { match } from 'ts-pattern';
import * as Yup from 'yup';

import { Done } from './done';
import { Education } from './education';
import { More } from './more';
import { Personal } from './personal';
import { SignUp } from './signup';
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

  const Component = match(graduateRoute)
    .with('graduate', () => SignUp)
    .with('personal', () => Personal)
    .with('more', () => More)
    .with('education', () => Education)
    .with('done', () => Done)
    .otherwise(() => () => <></>);

  return (
    <FormProvider {...formProps}>
      <Component />
    </FormProvider>
  );
}
