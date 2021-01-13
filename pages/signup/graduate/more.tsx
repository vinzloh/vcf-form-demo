import useCountryList from 'api-calls/useCountryList'
import useIndustryList from 'api-calls/useIndustryList'
import useJobFunctionList from 'api-calls/useJobFunctionList'
import Layout from 'components/Layout'
import Select from 'components/Select'
import Steps, { IStep } from 'components/Steps'
import StepsForm from 'components/StepsForm'
import TextField from 'components/TextField'
import useFocusInput from 'hooks/useFocusInput'
import useForm from 'hooks/useForm'
import useInMemoryCache from 'hooks/useInMemoryCache'
import ICompanyRegistration from 'interfaces/CompanyRegistration'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const More: React.FC = () => {
  const router = useRouter()
  const steps: Array<IStep> = [
    { text: 'Personal Information' },
    { text: 'More Information', isActive: true },
    { text: 'Education' },
    { text: "You're done" },
  ]

  const cache = useInMemoryCache('graduateRegistration')
  const data: ICompanyRegistration = cache.data
  const countries = useCountryList()
  const industries = useIndustryList()
  const jobFunctions = useJobFunctionList()

  useEffect(() => {
    // const data: ICompanyRegistration = cache.data
    // if (!data.name) router.push('/signup/graduate')
  }, [cache])

  const { focusRef } = useFocusInput()

  const { handleSubmit, getValues, ...formProps } = useForm(
    { name: 'firstName', type: 'text' },
    { name: 'lastName', type: 'text' },
    // TODO:
    { name: 'jobTitle', type: 'text' },
    { name: 'department', type: 'text' },
    { name: 'country', type: 'text' },
    { name: 'region', type: 'text' }
  )
  // TODO: pending Job title, department, structure for both sets of country/region
  const formData = {
    defaultValues: {
      firstName: data.user?.firstName,
      lastName: data.user?.lastName,
      email: data.user?.email,
      // TODO:
      // jobTitle: data.user?.email,
      // department: data.user?.email,
      country: data.basicInfo?.contact?.country,
      region: data.basicInfo?.contact?.region,
    },
  }

  return (
    <Layout>
      <Steps steps={steps} />
      <StepsForm
        onBack={() => {
          router.back()
        }}
        onSkip={() => {
          // cache.update(
          //   produce(cache.data, (state: ICompanyRegistration) => {
          //     delete state.basicInfo.contact.country
          //     delete state.basicInfo.contact.region
          //     delete state.basicInfo.industry
          //   })
          // )
          router.push('/signup/graduate/education')
        }}
      >
        <Select
          name="availableNow"
          placeholder="Are you available now?"
          values={countries}
          {...formData}
          {...formProps}
          parentRef={focusRef}
        />
        <Select
          name="expectedSalaryPeriod"
          placeholder="Expected salary period"
          values={countries}
          {...formData}
          {...formProps}
        />
        <Select
          name="expectedCurrency"
          placeholder="Expected salary currency"
          values={countries}
          {...formData}
          {...formProps}
        />
        <TextField
          name="expectedSalary"
          placeholder="Expected salary amount"
          {...formData}
          {...formProps}
        />
        <Select
          name="preferredIndustry"
          placeholder="Select your preferred industries"
          values={industries}
          {...formData}
          {...formProps}
        />
        <Select
          name="preferredJobFunction"
          placeholder="Preferred job functions"
          values={jobFunctions}
          {...formData}
          {...formProps}
        />
        <Select
          name="desiredWorkLocation"
          placeholder="Desired work locations"
          values={countries}
          {...formData}
          {...formProps}
        />
      </StepsForm>
    </Layout>
  )
}
export default More
