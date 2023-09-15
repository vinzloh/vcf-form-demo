import { useFetch } from '@/hooks/use-fetch';
import type { Option } from '@/interfaces';

export const useCurrencies = () => useFetch<Option[]>('currencies').data ?? [];
