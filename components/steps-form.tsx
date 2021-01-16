import Form from 'components/form'
import StepsNavigation, { IStepsNavigation } from 'components/steps-navigation'

const StepsForm: React.FC<IStepsNavigation> = ({ children, ...props }) => (
  <Form className="max-w-xs w-full sm:w-1/2 px-2">
    <div className="px-4 py-6 bg-white shadow-md grid gap-2">{children}</div>
    <StepsNavigation className="pt-4" {...props} />
  </Form>
)
export default StepsForm
