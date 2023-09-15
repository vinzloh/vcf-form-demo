import classNames from 'classnames';

import { Link } from '@/components/link';
import { PageContainer } from '@/components/page-container';

import styles from './footer.module.scss';

export const Footer = () => (
  <footer className="py-4 text-xs">
    <PageContainer>
      <FooterRow className="mb-4">
        <FooterFirstRow>
          <div className="flex items-center justify-center">
            <img src="/company-logo.svg" width="44" />
            <img src="/company-text-primary.svg" width="150" className="ml-2" />
          </div>
        </FooterFirstRow>

        <div
          className={classNames(
            'flex items-center justify-center text-gray-500',
          )}
        >
          <div>Stay in touch:</div>
          <div className="flex">
            <Link href="https://makeithappen.now.sh/">
              <img
                src="/facebook-icon.svg"
                width="30"
                className={classNames(styles.facebook, 'ml-4')}
              />
            </Link>
            <Link href="https://makeithappen.now.sh/">
              <img
                src="/linkedin-icon.svg"
                width="30"
                className={classNames(styles.linkedIn, 'ml-4')}
              />
            </Link>
          </div>
        </div>
      </FooterRow>

      <FooterRow>
        <FooterFirstRow>
          <Link href="https://makeithappen.now.sh/">Privacy Policy</Link>
          <Link href="https://github.com/vinzloh/vcf-form-demo">
            Source on Github
          </Link>
        </FooterFirstRow>
        <div className="text-gray-500 text-center">
          Maintained with 💛 | 2023
        </div>
      </FooterRow>
    </PageContainer>
  </footer>
);

const FooterRow = ({ className, ...props }: JSX.IntrinsicElements['div']) => (
  <div
    className={classNames('md:flex flex-row justify-between', className)}
    {...props}
  />
);

const FooterFirstRow = ({
  className,
  ...props
}: JSX.IntrinsicElements['div']) => (
  <div
    className={classNames(
      'grid gap-2 grid-flow-col-dense justify-center mb-4 pb-4 sm:pb-0 border-b sm:border-none',
      className,
    )}
    {...props}
  />
);
