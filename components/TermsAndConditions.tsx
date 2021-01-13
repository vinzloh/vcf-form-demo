import Checkbox from 'components/Checkbox'
import ExternalLink from 'components/ExternalLink'
import IFormControl from 'interfaces/FormControl'

const TermsAndConditions: React.FC<IFormControl> = (props) => (
  <Checkbox {...props}>
    <div className="flex flex-wrap text-xs my-1">
      <span className="whitespace-no-wrap mr-1">I accept the </span>
      <span className="whitespace-no-wrap text-primary font-semibold">
        <ExternalLink href="https://makeithappen.now.sh/">
          terms of use
        </ExternalLink>
      </span>
      <span className="mx-1">and</span>
      <span className="whitespace-no-wrap text-primary font-semibold">
        <ExternalLink href="https://makeithappen.now.sh/">
          privacy policy
        </ExternalLink>
      </span>
    </div>
  </Checkbox>
)

export default TermsAndConditions
