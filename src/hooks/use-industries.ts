import { useFetch } from '@/hooks/use-fetch';
import type { Option } from '@/interfaces';

export const useIndustryList = () =>
  useFetch<Option[]>('industries').data ?? [];
