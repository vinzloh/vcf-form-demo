import PrimaryButton from 'components/Button/PrimaryButton'
import Form from 'components/Form'
import LandingLayout from 'components/Layout/LandingLayout'
import ShadowLink from 'components/ShadowLink'
import TermsAndConditions from 'components/TermsAndConditions'
import TextField from 'components/TextField'
import useFocusInput from 'hooks/useFocusInput'
import useForm from 'hooks/useForm'
import useInMemoryCache from 'hooks/useInMemoryCache'
import useLogin from 'hooks/useLogin'

const Login: React.FC = () => {
  const { login } = useLogin()
  const { handleSubmit, ...formProps } = useForm(
    { type: 'email' },
    { type: 'password' },
    { type: 'tnc' }
  )

  useInMemoryCache().clear()
  const { focusRef } = useFocusInput()

  return (
    <LandingLayout>
      <Form>
        <TextField
          name="email"
          placeholder="Email"
          {...formProps}
          parentRef={focusRef}
        />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          {...formProps}
        />
        <TermsAndConditions name="tnc" {...formProps} />
        <div className="text-center">
          <PrimaryButton
            className="w-full"
            type="submit"
            onClick={handleSubmit(login)}
          >
            Enter the Career Fair
          </PrimaryButton>
        </div>
        <div className="text-xs text-center mt-3">
          <div className="mb-3">
            <span className="mr-1">No login?</span>
            <span className="font-semibold text-gray-800">Register</span>
            <span className="mx-1">now as a</span>
          </div>
          <ShadowLink href="/signup/graduate">
            <span className="font-semibold text-secondary">Graduate</span>
          </ShadowLink>
          <span className="mx-1" />
          <ShadowLink href="/signup/company">
            <span className="font-semibold text-primary">Company</span>
          </ShadowLink>
        </div>
      </Form>
    </LandingLayout>
  )
}
export default Login
