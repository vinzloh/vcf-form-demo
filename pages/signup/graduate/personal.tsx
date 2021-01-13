import useCountryList from 'api-calls/useCountryList'
import Layout from 'components/Layout'
import PhoneNumber from 'components/PhoneNumber'
import Select from 'components/Select'
import Steps, { IStep } from 'components/Steps'
import StepsForm from 'components/StepsForm'
import TextField from 'components/TextField'
import useFocusInput from 'hooks/useFocusInput'
import useForm from 'hooks/useForm'
import useInMemoryCache from 'hooks/useInMemoryCache'
import ICompanyRegistration from 'interfaces/CompanyRegistration'
import { regions } from 'mocks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import DatePicker from 'components/DatePicker'

const Personal: React.FC = () => {
  const router = useRouter()
  const steps: Array<IStep> = [
    { text: 'Personal Information', isActive: true },
    { text: 'More Information' },
    { text: 'Education' },
    { text: "You're done" },
  ]

  const cache = useInMemoryCache('graduateRegistration')
  const data: ICompanyRegistration = cache.data
  const countries = useCountryList()

  useEffect(() => {
    // const data: ICompanyRegistration = cache.data
    // if (!data.name) router.push('/signup/graduate')
  }, [cache])

  const { focusRef } = useFocusInput()

  const { handleSubmit, getValues, ...formProps } = useForm(
    { name: 'firstName', type: 'text' },
    { name: 'lastName', type: 'text' },
    { name: 'dateOfBirth', type: 'date' },

    { type: 'prefix' },
    { type: 'phone' },
    // TODO:
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
        onSkip={() => {
          // cache.update(
          //   produce(cache.data, (state: ICompanyRegistration) => {
          //     delete state.basicInfo.contact.country
          //     delete state.basicInfo.contact.region
          //     delete state.basicInfo.industry
          //   })
          // )
          router.push('/signup/graduate/more')
        }}
        onNext={handleSubmit((data: any) => {
          console.log(`onNext:`, data)
          // cache.update(
          //   produce(cache.data, (state: ICompanyRegistration) => {
          //     state.basicInfo.contact.country = data.country
          //     state.basicInfo.contact.region = data.region
          //     state.basicInfo.industry = data.industry
          //   })
          // )
          // router.push('/signup/graduate/more')
        })}
      >
        <TextField
          name="firstName"
          placeholder="First Name"
          {...formData}
          {...formProps}
          parentRef={focusRef}
        />
        <TextField
          name="lastName"
          placeholder="Last Name"
          {...formData}
          {...formProps}
        />
        <DatePicker
          name="dateOfBirth"
          placeholder="Date of birth"
          {...formData}
          {...formProps}
        />
        <Select
          name="country"
          placeholder="Select your country"
          values={countries}
          {...formData}
          {...formProps}
        />
        <Select
          name="region"
          placeholder="Select your region"
          values={regions}
          {...formData}
          {...formProps}
        />
        <Select
          name="nationality"
          placeholder="Select your nationality"
          values={countries}
          {...formData}
          {...formProps}
        />
        <PhoneNumber
          {...{
            prefix: { name: 'prefix', ...formData, ...formProps },
            phone: { name: 'phone', ...formData, ...formProps },
          }}
        />
      </StepsForm>
    </Layout>
  )
}
export default Personal
