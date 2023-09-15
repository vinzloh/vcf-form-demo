import classNames from 'classnames';

import { Form } from '@/components/form';
import { PrimaryButton } from '@/components/primary-button';
import { TextButton } from '@/components/text-button';

interface StepsFormProps {
  children: React.ReactNode;
  onBack?: () => void;
  onSkip?: () => void;
  onNext?: () => void;
  onFinish?: () => void;
}

export function StepsForm({
  children,
  onBack,
  onFinish,
  onSkip,
  onNext,
}: StepsFormProps) {
  return (
    <Form className="max-w-xs w-full sm:w-1/2 px-2">
      <div className="px-4 py-6 bg-white shadow-md grid gap-2">{children}</div>
      <div className={classNames('flex justify-between', 'pt-4')}>
        {onBack ? <TextButton onClick={onBack}>Back</TextButton> : <div />}
        <div className="flex items-center">
          {onFinish ? (
            <PrimaryButton type="submit" onClick={onFinish}>
              Finish
            </PrimaryButton>
          ) : (
            <>
              <TextButton onClick={onSkip}>Skip</TextButton>
              <div className="ml-1" />
              <PrimaryButton type="submit" onClick={onNext}>
                Next
              </PrimaryButton>
            </>
          )}
        </div>
      </div>
    </Form>
  );
}
