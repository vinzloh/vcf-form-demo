import { useFetch } from '@/hooks/use-fetch';
import type { Option } from '@/interfaces';

export const useQualifications = () =>
  useFetch<Option[]>('qualifications').data ?? [];
