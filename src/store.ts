import { map, atom } from 'nanostores';

export type Route = 'graduate' | 'personal' | 'more' | 'education';

export const $graduateRoute = atom<Route>('graduate');

export interface GraduateFormValues {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  prefix: string;
  phone: string;
  tnc: boolean;
  country: string;
  region: string;
  nationality: string;
  dateOfBirth: Date | undefined;
  expectedCurrency: string;
  expectedSalary: string;
  preferredIndustry: string;
  preferredJobFunction: string;
  desiredWorkLocation: string;
}

export const $graduate = map<{ graduate: GraduateFormValues }>({
  graduate: {
    firstName: 'Bruce',
    lastName: 'Lee',
    password: 'password',
    email: 'yolo@yolo.com',
    prefix: '+60',
    phone: '176227012',
    country: '',
    region: '',
    nationality: '',
    tnc: true,
    dateOfBirth: undefined,
    expectedCurrency: '',
    expectedSalary: '',
    preferredIndustry: '',
    preferredJobFunction: '',
    desiredWorkLocation: '',
  },
});
