import { useStore } from '@nanostores/react';

import { $graduate } from '@/store';

export function useGraduateFormValues() {
  return useStore($graduate).graduate;
}
