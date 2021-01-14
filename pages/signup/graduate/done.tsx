import Form from 'components/form'
import Layout from 'components/layout'
import PieProgress from 'components/pie-progress'
import Steps, { IStep } from 'components/steps'
import StepsNavigation from 'components/steps-navigation'
import { useRouter } from 'next/router'

const Done: React.FC = () => {
  const router = useRouter()
  const steps: Array<IStep> = [
    { text: 'Personal Information' },
    { text: 'More Information' },
    { text: 'Education' },
    { text: "You're done", isActive: true },
  ]

  return (
    <Layout>
      <Steps steps={steps} />
      <Form className="max-w-md bg-transparent text-center px-4">
        <h1 className="text-2xl mb-1 text-center">Your Hireability Score</h1>
        <div className="my-2">
          <PieProgress />
        </div>
        <h2 className="text-base font-semibold">
          Your profile is visible to Companies at 40% completion
        </h2>
        <div className="text-sm mb-4 text-center">
          The more you work on your profile the higher your score.
          <div>Click Finish and continue to your profile.</div>
        </div>
        <StepsNavigation
          className="pt-4"
          onBack={() => {
            router.back()
          }}
          onFinish={() => {}}
        />
      </Form>
    </Layout>
  )
}
export default Done
