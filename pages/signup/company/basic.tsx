import useCountryList from 'api-calls/use-countries'
import useIndustryList from 'api-calls/use-industries'
import Layout from 'components/layout'
import Select from 'components/select'
import Steps, { IStep } from 'components/steps'
import StepsForm from 'components/steps-form'
import useFocusInput from 'hooks/use-focus-input'
import useForm from 'hooks/use-form'
import useInMemoryCache from 'hooks/use-memory-cache'
import produce from 'immer'
import ICompanyRegistration from 'interfaces/company-registration'
import { regions } from 'mocks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Basic: React.FC = () => {
  const router = useRouter()
  const cache = useInMemoryCache('companyRegistration')
  const data: ICompanyRegistration = cache.data
  const countries = useCountryList()
  const industries = useIndustryList()

  const { handleSubmit, ...formProps } = useForm(
    { name: 'country', type: 'text' },
    { name: 'region', type: 'text' },
    { name: 'industry', type: 'text' }
  )
  const formData = {
    defaultValues: {
      country: data.basicInfo?.contact?.country,
      region: data.basicInfo?.contact?.region,
      industry: data.basicInfo?.industry,
    },
  }

  const steps: Array<IStep> = [
    { text: 'Company Information', isActive: true },
    { text: 'Personal Information' },
  ]

  useEffect(() => {
    const data: ICompanyRegistration = cache.data
    if (!data.name) router.push('/signup/company')
  }, [cache, router])

  const { focusRef } = useFocusInput()

  return (
    <Layout>
      <Steps steps={steps} />
      <div className="bg-gray-500 mb-4 w-32 h-32 rounded-full flex items-center justify-center">
        round avatar
      </div>
      <StepsForm
        onSkip={() => {
          cache.update(
            produce(cache.data, (state: ICompanyRegistration) => {
              state.basicInfo.contact.country = ''
              state.basicInfo.contact.region = ''
              state.basicInfo.industry = ''
            })
          )
          router.push('/signup/company/user')
        }}
        onNext={handleSubmit((data: any) => {
          cache.update(
            produce(cache.data, (state: ICompanyRegistration) => {
              state.basicInfo.contact.country = data.country
              state.basicInfo.contact.region = data.region
              state.basicInfo.industry = data.industry
            })
          )
          router.push('/signup/company/user')
        })}
      >
        <Select
          name="country"
          placeholder="Select your country"
          values={countries}
          {...formData}
          {...formProps}
          parentRef={focusRef}
        />
        <Select
          name="region"
          placeholder="Select your region"
          values={regions}
          {...formData}
          {...formProps}
        />
        <Select
          name="industry"
          placeholder="Select your industry"
          values={industries}
          {...formData}
          {...formProps}
        />
      </StepsForm>
    </Layout>
  )
}

export default Basic
