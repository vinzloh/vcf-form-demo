import { useFetch } from '@/hooks/use-fetch';
import type { Option } from '@/interfaces';

export const useRegions = () => useFetch<Option[]>('regions').data ?? [];
