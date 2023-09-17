import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { match } from 'ts-pattern';
import * as Yup from 'yup';

import type { CompanyFormValues } from '@/store';

import { SignUp } from './signup';
import { Basic } from './basic';
import { useCompanyFormValues } from './use-company-form-values';
import { useCompanyRoute } from './use-company-route';

const schema = Yup.object<Partial<CompanyFormValues>>({
  name: Yup.string().required('Required'),
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

export function Company() {
  const formValues = useCompanyFormValues();
  const graduateRoute = useCompanyRoute();
  const formProps = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    values: formValues,
  });

  // TODO:
  const User = () => <>User</>;

  const Component = match(graduateRoute)
    .with('company', () => SignUp)
    .with('basic', () => Basic)
    .with('user', () => User)
    .otherwise(() => () => <></>);

  return (
    <FormProvider {...formProps}>
      <Component />
    </FormProvider>
  );
}
