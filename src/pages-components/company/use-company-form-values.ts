import { useStore } from '@nanostores/react';

import { $company } from '@/store';

export function useCompanyFormValues() {
  return useStore($company).company;
}
