import { useFormContext } from 'react-hook-form';

import { Form } from '@/components/form';
import { Link } from '@/components/link';
import { PhoneNumber } from '@/components/phone-number';
import { PrimaryButton } from '@/components/primary-button';
import { TermsAndConditions } from '@/components/terms-and-conditions';
import { TextField } from '@/components/text-field';
import { $graduateRoute, type GraduateFormValues } from '@/store';

export function SignUp() {
  const formProps = useFormContext<GraduateFormValues>();

  return (
    <Form>
      <TextField
        name="firstName"
        placeholder="First Name"
        control={formProps.control}
      />
      <TextField
        name="lastName"
        placeholder="Last Name"
        control={formProps.control}
      />
      <TextField name="email" placeholder="Email" control={formProps.control} />
      <div className="text-xs px-3">
        If you are a university student please use your university email
        account. *
      </div>
      <TextField
        name="password"
        type="password"
        placeholder="Password"
        control={formProps.control}
      />
      <PhoneNumber
        prefix={{ name: 'prefix' }}
        phone={{ name: 'phone' }}
        control={formProps.control}
        errors={formProps.formState.errors}
      />
      <TermsAndConditions
        name="tnc"
        control={formProps.control}
        errors={formProps.formState.errors}
      />
      <div className="text-center">
        <PrimaryButton
          type="submit"
          className="w-full"
          onClick={formProps.handleSubmit(() => {
            $graduateRoute.set('personal');
          })}
        >
          Register
        </PrimaryButton>
      </div>
      <div className="text-xs text-center mt-3">
        <span className="mr-1">Already have an account?</span>
        <Link href="/login">
          <span className="font-semibold text-primary">Login</span>
        </Link>
      </div>
    </Form>
  );
}
