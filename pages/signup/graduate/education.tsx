import useCountryList from 'api-calls/useCountryList'
import useQualifications from 'api-calls/useQualifications'
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
import DatePicker from 'components/DatePicker'

const Education: React.FC = () => {
  const router = useRouter()
  const steps: Array<IStep> = [
    { text: 'Personal Information' },
    { text: 'More Information' },
    { text: 'Education', isActive: true },
    { text: "You're done" },
  ]

  const cache = useInMemoryCache('graduateRegistration')
  const data: ICompanyRegistration = cache.data
  const countries = useCountryList()
  const qualifications = useQualifications()

  useEffect(() => {
    // const data: ICompanyRegistration = cache.data
    // if (!data.name) router.push('/signup/graduate')
  }, [cache])

  const { focusRef } = useFocusInput()

  const { handleSubmit, getValues, ...formProps } = useForm(
    { name: 'firstName', type: 'text' },
    { name: 'lastName', type: 'text' },
    { name: 'admissionDate', type: 'date' },
    { name: 'graduationDate', type: 'date' },
    { name: 'country', type: 'text' },
    { name: 'region', type: 'text' }
  )
  const formData = {
    defaultValues: {
      firstName: data.user?.firstName,
      lastName: data.user?.lastName,
      email: data.user?.email,
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
          router.push('/signup/graduate/done')
        }}
      >
        <TextField
          name="universityName"
          placeholder="University Name"
          {...formData}
          {...formProps}
          parentRef={focusRef}
        />
        <Select
          name="universityCountry"
          placeholder="University Country"
          values={countries}
          {...formData}
          {...formProps}
        />
        <TextField
          name="universityCourse"
          placeholder="Course"
          {...formData}
          {...formProps}
        />
        <Select
          name="qualification"
          placeholder="Select your qualification level"
          values={qualifications}
          {...formData}
          {...formProps}
        />
        <DatePicker
          name="admissionDate"
          placeholder="Admission Date"
          scrollMarginTop={220}
          {...formData}
          {...formProps}
        />
        <DatePicker
          name="graduationDate"
          placeholder="Graduation Date"
          scrollMarginTop={100}
          {...formData}
          {...formProps}
        />
      </StepsForm>
    </Layout>
  )
}
export default Education
