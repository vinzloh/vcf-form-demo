import { useFormContext } from 'react-hook-form';

import { Select } from '@/components/select';
import { Steps, type IStep } from '@/components/steps';
import { StepsForm } from '@/components/steps-form';
import { useCountries } from '@/hooks/use-countries';
import { useIndustryList } from '@/hooks/use-industries';
import { useRegions } from '@/hooks/use-regions';
import { $companyRoute, type CompanyFormValues } from '@/store';

export function Basic() {
  const formProps = useFormContext<CompanyFormValues>();
  const countries = useCountries();
  const regions = useRegions();
  const industries = useIndustryList();

  const steps: Array<IStep> = [
    { text: 'Company Information', isActive: true },
    { text: 'Personal Information' },
  ];

  return (
    <>
      <Steps steps={steps} />
      <div className="bg-gray-500 mb-4 w-32 h-32 rounded-full flex items-center justify-center">
        round avatar
      </div>
      <StepsForm
        onSkip={() => $companyRoute.set('user')}
        onNext={formProps.handleSubmit(() => {
          $companyRoute.set('user');
        })}
      >
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
        <Select
          name="industry"
          placeholder="Select your industry"
          options={industries}
          control={formProps.control}
        />
      </StepsForm>
    </>
  );
}
