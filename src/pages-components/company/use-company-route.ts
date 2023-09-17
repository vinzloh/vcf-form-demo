import { useStore } from '@nanostores/react';

import { $companyRoute } from '@/store';

export function useCompanyRoute() {
  return useStore($companyRoute);
}
