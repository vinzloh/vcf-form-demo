import classNames from 'classnames'
import ExternalLink from 'components/external-link'
import PageContainer from 'components/page-container'
import FacebookSVG from 'public/facebook-icon.svg'
import LinkedInSVG from 'public/linkedin-icon.svg'
import styles from './footer.module.scss'

const deadCenterStyles = 'flex items-center justify-center'
const footerRowStyles = 'md:flex flex-row justify-between'
const borderedWrapperStyles =
  'grid gap-2 grid-flow-col-dense justify-center mb-4 pb-4 sm:pb-0 border-b sm:border-none'

const Footer: React.FC = () => (
  <footer className="py-4 text-xs">
    <PageContainer>
      <div className={classNames(footerRowStyles, 'mb-4')}>
        <div className={borderedWrapperStyles}>
          <div className={deadCenterStyles}>
            <img src="/company-logo.svg" width="44" />
            <img src="/company-text-primary.svg" width="150" className="ml-2" />
          </div>
        </div>

        <div className={classNames('text-gray-500', deadCenterStyles)}>
          <div>Stay in touch:</div>
          <div className="flex">
            <ExternalLink href="https://makeithappen.now.sh/">
              <FacebookSVG
                width="30"
                className={classNames(styles.facebook, 'ml-4')}
              />
            </ExternalLink>
            <ExternalLink href="https://makeithappen.now.sh/">
              <LinkedInSVG
                width="30"
                className={classNames(styles.linkedIn, 'ml-4')}
              />
            </ExternalLink>
          </div>
        </div>
      </div>

      <div className={footerRowStyles}>
        <div className={borderedWrapperStyles}>
          <ExternalLink href="https://makeithappen.now.sh/">
            Privacy Policy
          </ExternalLink>
          <ExternalLink href="https://github.com/vinzloh/vcf-form-demo">
            Source on Github
          </ExternalLink>
        </div>
        <div className="text-gray-500 text-center">
          Vinz Loh © 2020. All rights reserved.
        </div>
      </div>
    </PageContainer>
  </footer>
)

export default Footer
