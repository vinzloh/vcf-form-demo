import * as React from 'react';

import { ProgressCircle } from '@/components/progress-circle';
import { Steps, type IStep } from '@/components/steps';
import { StepsForm } from '@/components/steps-form';
import { $graduateRoute } from '@/store';

export function Done() {
  const [percent, setPercent] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => setPercent(40), 800);
  }, []);

  const steps: Array<IStep> = [
    { text: 'Personal Information' },
    { text: 'More Information' },
    { text: 'Education' },
    { text: "You're done", isActive: true },
  ];

  return (
    <>
      <Steps steps={steps} />
      <StepsForm
        className="max-w-md bg-transparent text-center px-4"
        onBack={() => {
          $graduateRoute.set('education');
        }}
        onFinish={() => {}}
      >
        <h1 className="text-2xl mb-1 text-center">Your Hireability Score</h1>
        <div className="my-2">
          <ProgressCircle finalPercent={percent} />
        </div>
        <h2 className="text-base font-semibold">
          Your profile is visible to Companies at {percent}% completion
        </h2>
        <div className="text-sm mb-4 text-center">
          The more you work on your profile the higher your score.
          <div>Click Finish and continue to your profile.</div>
        </div>
      </StepsForm>
    </>
  );
}
