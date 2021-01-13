import PrimaryButton from 'components/Button/PrimaryButton'
import Form from 'components/Form'
import LandingLayout from 'components/Layout/LandingLayout'
import PhoneNumber from 'components/PhoneNumber'
import ShadowLink from 'components/ShadowLink'
import TermsAndConditions from 'components/TermsAndConditions'
import TextField from 'components/TextField'
import useFocusInput from 'hooks/useFocusInput'
import useForm from 'hooks/useForm'
import useInMemoryCache from 'hooks/useInMemoryCache'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from './Header'

const Graduate: React.FC = () => {
  const router = useRouter()
  const { handleSubmit, ...formProps } = useForm()
  // { type: 'prefix' },
  // { type: 'phone' }
  // TODO:
  // { name: 'firstName', type: 'text' },
  // { name: 'lastName', type: 'text' },
  // { type: 'email' },
  // { type: 'password' },
  // { type: 'tnc' }

  const cache = useInMemoryCache('graduateRegistration')
  useEffect(() => {
    cache.clear()
  }, [cache])

  const onSubmit = ({}: any) => {
    // cache.update({
    //   name,
    //   basicInfo: { contact: { email } },
    //   user: { email, password },
    // } as ICompanyRegistration)
    router.push('/signup/graduate/personal')
  }

  const { focusRef } = useFocusInput()

  return (
    <LandingLayout>
      <Header />
      <Form>
        <TextField
          name="firstName"
          placeholder="First Name"
          {...formProps}
          parentRef={focusRef}
        />
        <TextField name="lastName" placeholder="Last Name" {...formProps} />
        <TextField name="email" placeholder="Email" {...formProps} />
        <div className="text-xs px-3">
          If you are a university student please use your university email
          account. *
        </div>
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          {...formProps}
        />
        <PhoneNumber
          {...{
            prefix: { name: 'prefix', ...formProps },
            phone: { name: 'phone', ...formProps },
          }}
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

export default Graduate
