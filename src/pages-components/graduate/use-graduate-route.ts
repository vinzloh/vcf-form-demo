import { useStore } from '@nanostores/react';

import { $graduateRoute } from '@/store';

export function useGraduateRoute() {
  return useStore($graduateRoute);
}
