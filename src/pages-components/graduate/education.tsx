import { useFormContext } from 'react-hook-form';

import { DatePicker } from '@/components/date-picker';
import { Select } from '@/components/select';
import { TextField } from '@/components/text-field';
import { useCountries } from '@/hooks/use-countries';
import { useQualifications } from '@/hooks/use-qualifications';
import { $graduateRoute, type GraduateFormValues } from '@/store';

import { Steps, type IStep } from './steps';
import { StepsForm } from './steps-form';

export function Education() {
  const formProps = useFormContext<GraduateFormValues>();
  const steps: Array<IStep> = [
    { text: 'Personal Information' },
    { text: 'More Information' },
    { text: 'Education', isActive: true },
    { text: "You're done" },
  ];

  const countries = useCountries();
  const qualifications = useQualifications();

  return (
    <>
      <Steps steps={steps} />
      <StepsForm
        onBack={() => $graduateRoute.set('more')}
        onSkip={() => $graduateRoute.set('done')}
        onNext={formProps.handleSubmit(() => {
          $graduateRoute.set('done');
        })}
      >
        <TextField
          name="universityName"
          placeholder="University Name"
          control={formProps.control}
        />
        <Select
          name="universityCountry"
          placeholder="University Country"
          options={countries}
          control={formProps.control}
        />
        <TextField
          name="universityCourse"
          placeholder="Course"
          control={formProps.control}
        />
        <Select
          name="qualification"
          placeholder="Select your qualification level"
          options={qualifications}
          control={formProps.control}
        />
        <DatePicker
          name="admissionDate"
          placeholderText="Admission Date"
          control={formProps.control}
        />
        <DatePicker
          name="graduationDate"
          placeholderText="Graduation Date"
          control={formProps.control}
        />
      </StepsForm>
    </>
  );
}
