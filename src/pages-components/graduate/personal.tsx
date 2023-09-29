import { useFormContext } from 'react-hook-form';

import { DatePicker } from '@/components/date-picker';
import { PhoneNumber } from '@/components/phone-number';
import { Select } from '@/components/select';
import { Steps, type IStep } from '@/components/steps';
import { StepsForm } from '@/components/steps-form';
import { TextField } from '@/components/text-field';
import { useCountries } from '@/hooks/use-countries';
import { useRegions } from '@/hooks/use-regions';
import { $graduateRoute, type GraduateFormValues } from '@/store';

export function Personal() {
  const formProps = useFormContext<GraduateFormValues>();
  const steps: Array<IStep> = [
    { text: 'Personal Information', isActive: true },
    { text: 'More Information' },
    { text: 'Education' },
    { text: "You're done" },
  ];

  const countries = useCountries();
  const regions = useRegions();

  return (
    <>
      <Steps steps={steps} />
      <StepsForm
        onSkip={() => {
          $graduateRoute.set('more');
        }}
        onNext={formProps.handleSubmit(() => {
          $graduateRoute.set('more');
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
        <DatePicker
          name="dateOfBirth"
          placeholderText="Date of birth"
          control={formProps.control}
        />
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
          name="nationality"
          placeholder="Select your nationality"
          options={countries}
          control={formProps.control}
        />
        <PhoneNumber
          prefix={{ name: 'prefix' }}
          phone={{ name: 'phone' }}
          control={formProps.control}
          errors={formProps.formState.errors}
        />
      </StepsForm>
    </>
  );
}
