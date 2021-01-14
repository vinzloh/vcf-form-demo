import useCountryList from 'api-calls/use-countries'
import Layout from 'components/layout'
import Select from 'components/select'
import Steps, { IStep } from 'components/steps'
import StepsForm from 'components/steps-form'
import TextField from 'components/text-field'
import useFocusInput from 'hooks/use-focus-input'
import useForm from 'hooks/use-form'
import useInMemoryCache from 'hooks/use-memory-cache'
import produce from 'immer'
import ICompanyRegistration from 'interfaces/company-registration'
import { regions } from 'mocks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const User: React.FC = () => {
  const router = useRouter()
  const steps: Array<IStep> = [
    { text: 'Company Information' },
    { text: 'Personal Information', isActive: true },
  ]

  const cache = useInMemoryCache('companyRegistration')
  const data: ICompanyRegistration = cache.data
  const countries = useCountryList()
  useEffect(() => {
    const data: ICompanyRegistration = cache.data
    if (!data.name) router.push('/signup/company')
  }, [cache, router])

  const { focusRef } = useFocusInput()

  const { handleSubmit, getValues, ...formProps } = useForm(
    { name: 'firstName', type: 'text' },
    { name: 'lastName', type: 'text' },
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
      <div className="bg-gray-500 mb-4 w-32 h-32 rounded-full flex items-center justify-center">
        round avatar
      </div>
      <StepsForm
        onBack={() => {
          const formValues = getValues()
          console.log(`formValues:`, formValues)
          cache.update(
            produce(cache.data, (state: ICompanyRegistration) => {
              console.log(`onBack data:`, data)
              state.user.firstName = formValues.firstName
              state.user.lastName = formValues.lastName
              // TODO:
              state.basicInfo.contact.country = formValues.country
              state.basicInfo.contact.region = formValues.region
            })
          )
          router.back()
        }}
        onFinish={handleSubmit((data: any) => {
          cache.update(
            produce(cache.data, (state: ICompanyRegistration) => {
              state.user.firstName = data.firstName
              state.user.lastName = data.lastName
              // TODO:
              state.basicInfo.contact.country = data.country
              state.basicInfo.contact.region = data.region
            })
          )
          // router.push('/signup/company/user')
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
        <TextField name="email" {...formData} {...formProps} disabled />
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
      </StepsForm>
    </Layout>
  )
}
export default User
