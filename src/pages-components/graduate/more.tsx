import { useFormContext } from 'react-hook-form';

import { Select } from '@/components/select';
import { Steps, type IStep } from '@/components/steps';
import { StepsForm } from '@/components/steps-form';
import { TextField } from '@/components/text-field';
import { useCountries } from '@/hooks/use-countries';
import { useCurrencies } from '@/hooks/use-currencies';
import { useIndustryList } from '@/hooks/use-industries';
import { useJobFunctions } from '@/hooks/use-job-functions';
import { $graduateRoute, type GraduateFormValues } from '@/store';

export function More() {
  const formProps = useFormContext<GraduateFormValues>();
  const steps: Array<IStep> = [
    { text: 'Personal Information' },
    { text: 'More Information', isActive: true },
    { text: 'Education' },
    { text: "You're done" },
  ];

  const countries = useCountries();
  const industries = useIndustryList();
  const jobFunctions = useJobFunctions();
  const currencies = useCurrencies();

  return (
    <>
      <Steps steps={steps} />
      <StepsForm
        onBack={() => $graduateRoute.set('personal')}
        onSkip={() => $graduateRoute.set('education')}
        onNext={formProps.handleSubmit(() => {
          $graduateRoute.set('education');
        })}
      >
        <Select
          name="expectedCurrency"
          placeholder="Expected salary currency"
          options={currencies}
          control={formProps.control}
        />
        <TextField
          name="expectedSalary"
          placeholder="Expected salary amount"
          control={formProps.control}
        />
        <Select
          name="preferredIndustry"
          placeholder="Select your preferred industries"
          options={industries}
          control={formProps.control}
        />
        <Select
          name="preferredJobFunction"
          placeholder="Preferred job functions"
          options={jobFunctions}
          control={formProps.control}
        />
        <Select
          name="desiredWorkLocation"
          placeholder="Desired work locations"
          options={countries}
          control={formProps.control}
        />
      </StepsForm>
    </>
  );
}
