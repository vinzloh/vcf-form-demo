import { map, atom } from 'nanostores';

export type GraduateRoute =
  | 'graduate'
  | 'personal'
  | 'more'
  | 'education'
  | 'done';

export const $graduateRoute = atom<GraduateRoute>('graduate');

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
  universityName: string;
  universityCountry: string;
  universityCourse: string;
  qualification: string;
  admissionDate: Date | undefined;
  graduationDate: Date | undefined;
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
    universityName: '',
    universityCountry: '',
    universityCourse: '',
    qualification: '',
    admissionDate: undefined,
    graduationDate: undefined,
  },
});

export type CompanyRoute = 'company' | 'basic' | 'user';

export const $companyRoute = atom<CompanyRoute>('company');

export interface CompanyFormValues {
  name: string;
  email: string;
  password: string;
  tnc: boolean;
  country: string;
  region: string;
  industry: string;
}

export const $company = map<{ company: CompanyFormValues }>({
  company: {
    name: 'Yolo Sdn Bhd',
    email: 'yolo@gmail.com',
    password: 'password',
    tnc: true,
    country: '',
    region: '',
    industry: '',
  },
});
