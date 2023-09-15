import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Form } from '@/components/form';
import { Link } from '@/components/link';
import { PrimaryButton } from '@/components/primary-button';
import { TermsAndConditions } from '@/components/terms-and-conditions';
import { TextField } from '@/components/text-field';
import { useAuth } from '@/hooks/use-auth';
import { useLogin } from '@/hooks/use-login';

const schema = Yup.object({
  // text: Yup.string().required('This field is required'),
  // date: Yup.string().nullable().required('This field is required'),
  // prefix: Yup.string().required('Prefix is required'),
  // phone: Yup.string().required('Phone is required'),
  email: Yup.string()
    .email('Email not valid')
    .required('This field is required'),
  password: Yup.string().matches(
    /^.{8,}$/, // matches any character, min 8
    'The password is not valid. Must have at least 8 characters',
  ),
  tnc: Yup.mixed().oneOf(
    [true],
    'Please accept the terms of use and privacy policy',
  ),
});

type FormValues = {
  email: string;
  password: string;
  tnc: boolean;
};

export function Login() {
  const { data: { status: isAuthenticated } = {} } = useAuth();

  React.useEffect(() => {
    if (isAuthenticated) window.location.assign('/');
  }, [isAuthenticated]);

  const { login } = useLogin();
  const { handleSubmit, ...formProps } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    values: {
      email: 'yolo@yolo.com',
      password: '12345678',
      tnc: true,
    },
  });

  if (isAuthenticated) return <></>;
  return (
    <Form className="p-6 bg-white">
      <TextField name="email" placeholder="Email" control={formProps.control} />
      <TextField
        name="password"
        type="password"
        placeholder="Password"
        control={formProps.control}
      />
      <TermsAndConditions
        name="tnc"
        control={formProps.control}
        errors={formProps.formState.errors}
      />
      <div className="text-center">
        <PrimaryButton
          className="w-full"
          type="submit"
          onClick={handleSubmit(login)}
        >
          Enter the Career Fair
        </PrimaryButton>
      </div>
      <div className="text-xs text-center mt-3">
        <div className="mb-3">
          <span className="mr-1">No login?</span>
          <span className="font-semibold text-gray-800">Register</span>
          <span className="mx-1">now as a</span>
        </div>
        <Link href="/signup/graduate">
          <span className="font-semibold text-secondary">Graduate</span>
        </Link>
        <span className="mx-1" />
        <Link href="/signup/company">
          <span className="font-semibold text-primary">Company</span>
        </Link>
      </div>
    </Form>
  );
}
