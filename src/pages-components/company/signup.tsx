import { useFormContext } from 'react-hook-form';

import { Form } from '@/components/form';
import { Link } from '@/components/link';
import { PrimaryButton } from '@/components/primary-button';
import { TermsAndConditions } from '@/components/terms-and-conditions';
import { TextField } from '@/components/text-field';
import { $companyRoute, type CompanyFormValues } from '@/store';

export function SignUp() {
  const formProps = useFormContext<CompanyFormValues>();
  return (
    <>
      <div className="text-sm mb-4 text-center">
        Create your company profile and start your search
      </div>
      <Form>
        <TextField
          name="name"
          placeholder="Company Name"
          control={formProps.control}
        />
        <TextField
          name="email"
          placeholder="Email"
          control={formProps.control}
        />
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
            type="submit"
            className="w-full"
            onClick={formProps.handleSubmit(() => {
              $companyRoute.set('basic');
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
    </>
  );
}
