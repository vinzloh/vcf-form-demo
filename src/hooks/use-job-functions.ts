import { useFetch } from '@/hooks/use-fetch';
import type { Option } from '@/interfaces';

export const useJobFunctions = () =>
  useFetch<Option[]>('job-functions').data ?? [];
