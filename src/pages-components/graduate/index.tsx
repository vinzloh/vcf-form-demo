import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { match } from 'ts-pattern';
import * as Yup from 'yup';

import type { GraduateFormValues } from '@/store';

import { Done } from './done';
import { Education } from './education';
import { More } from './more';
import { Personal } from './personal';
import { SignUp } from './signup';
import { useGraduateFormValues } from './use-graduate-form-values';
import { useGraduateRoute } from './use-graduate-route';

const schema = Yup.object<Partial<GraduateFormValues>>({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string()
    .email('Email not valid')
    .required('This field is required'),
  password: Yup.string()
    .required('Required')
    .matches(
      /^.{8,}$/, // matches any character, min 8
      'The password is not valid. Must have at least 8 characters',
    ),
  tnc: Yup.mixed()
    .required('Required')
    .oneOf([true], 'Please accept the terms of use and privacy policy'),
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
