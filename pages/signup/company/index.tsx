import PrimaryButton from 'components/Button/PrimaryButton'
import Form from 'components/Form'
import LandingLayout from 'components/Layout/LandingLayout'
import ShadowLink from 'components/ShadowLink'
import TermsAndConditions from 'components/TermsAndConditions'
import TextField from 'components/TextField'
import useFocusInput from 'hooks/useFocusInput'
import useForm from 'hooks/useForm'
import useInMemoryCache from 'hooks/useInMemoryCache'
import ICompanyRegistration from 'interfaces/CompanyRegistration'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from './Header'

const Company: React.FC = () => {
  const router = useRouter()
  const { handleSubmit, ...formProps } = useForm(
    { name: 'name', type: 'text' },
    { type: 'email' },
    { type: 'password' },
    { type: 'tnc' }
  )
  const cache = useInMemoryCache('companyRegistration')
  useEffect(() => {
    cache.clear()
  }, [cache])

  const onSubmit = ({ name, email, password }: any) => {
    cache.update({
      name,
      basicInfo: { contact: { email } },
      user: { email, password },
    } as ICompanyRegistration)
    router.push('/signup/company/basic')
  }

  const { focusRef } = useFocusInput()

  return (
    <LandingLayout>
      <Header />
      <Form>
        <TextField
          name="name"
          placeholder="Company Name"
          {...formProps}
          parentRef={focusRef}
        />
        <TextField name="email" placeholder="Email" {...formProps} />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          {...formProps}
        />
        <TermsAndConditions name="tnc" {...formProps} />
        <div className="text-center">
          <PrimaryButton
            type="submit"
            className="w-full"
            onClick={handleSubmit(onSubmit)}
          >
            Register
          </PrimaryButton>
        </div>
        <div className="text-xs text-center mt-3">
          <span className="mr-1">Already have an account?</span>
          <ShadowLink href="/login">
            <span className="font-semibold text-primary">Login</span>
          </ShadowLink>
        </div>
      </Form>
    </LandingLayout>
  )
}
export default Company
