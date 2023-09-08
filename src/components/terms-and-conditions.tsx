import type { FieldValues } from 'react-hook-form';

import { Checkbox, type CheckboxProps } from '@/components/checkbox';
import { Link } from '@/components/link';

export interface TermsAndConditionsProps<T extends FieldValues>
  extends CheckboxProps<T> {}

export function TermsAndConditions<T extends FieldValues>(
  props: TermsAndConditionsProps<T>,
) {
  return (
    <Checkbox {...props}>
      <div className="flex flex-wrap text-xs my-1">
        <span className="whitespace-no-wrap mr-1">I accept the </span>
        <span className="whitespace-no-wrap text-primary font-semibold">
          <Link href="https://makeithappen.now.sh/">terms of use</Link>
        </span>
        <span className="mx-1">and</span>
        <span className="whitespace-no-wrap text-primary font-semibold">
          <Link href="https://makeithappen.now.sh/">privacy policy</Link>
        </span>
      </div>
    </Checkbox>
  );
}
