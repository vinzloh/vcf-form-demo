import { useFetch } from '@/hooks/use-fetch';
import type { Option } from '@/interfaces';

export const useCountries = () => useFetch<Option[]>('countries').data ?? [];
