import { useFormContext } from 'react-hook-form';

import { Select } from '@/components/select';
import { Steps, type IStep } from '@/components/steps';
import { StepsForm } from '@/components/steps-form';
import { TextField } from '@/components/text-field';
import { useCountries as useCountryList } from '@/hooks/use-countries';
import { useRegions } from '@/hooks/use-regions';
import { $companyRoute, type CompanyFormValues } from '@/store';

export function User() {
  const steps: Array<IStep> = [
    { text: 'Company Information' },
    { text: 'Personal Information', isActive: true },
  ];

  const formProps = useFormContext<CompanyFormValues>();
  const countries = useCountryList();
  const regions = useRegions();

  return (
    <>
      <Steps steps={steps} />
      <div className="bg-gray-500 mb-4 w-32 h-32 rounded-full flex items-center justify-center">
        round avatar
      </div>
      <StepsForm
        onBack={() => $companyRoute.set('basic')}
        onFinish={formProps.handleSubmit(() => {
          window.location.assign('/login');
        })}
      >
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
        <TextField name="email" control={formProps.control} disabled />
        <Select
          name="country"
          placeholder="Select your country"
          options={countries}
          control={formProps.control}
        />
        <Select
          name="region"
          placeholder="Select your region"
          options={regions}
          control={formProps.control}
        />
      </StepsForm>
    </>
  );
}
