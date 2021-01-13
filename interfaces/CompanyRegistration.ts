export default interface ICompanyRegistration {
  name: string
  countryCode: string
  mobileNumber: string
  basicInfo: {
    contact: {
      country: string
      region: string
      email: string
    }
    industry: string
  }
  user: {
    firstName: string
    lastName: string
    email: string
    password: string
  }
}
