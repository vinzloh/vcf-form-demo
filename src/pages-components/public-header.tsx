import { Link, type LinkProps } from '@/components/link';
import { PageContainer } from '@/components/page-container';

export function PublicHeader() {
  return (
    <header className="bg-gray-700 text-gray-200 px-0 py-3 md:py-4">
      <PageContainer className={'lg:flex flex-row justify-between'}>
        <div className="flex items-center justify-center">
          <img src="/company-logo.svg" style={{ width: 55, maxWidth: '20%' }} />
          <img src="/company-text-primary.svg" width="150" className="ml-2" />
        </div>
        <div className="mt-3 lg:mt-0 flex justify-center  lg:grid grid-flow-col-dense gap-2 items-center">
          <NavLink href="/login">Login</NavLink>
          <NavLink href="/signup/graduate">
            <span>Graduates</span>
          </NavLink>
          <NavLink href="/signup/company">
            <span>Companies</span>
          </NavLink>
        </div>
      </PageContainer>
    </header>
  );
}

const NavLink = (props: LinkProps) => (
  <Link className="text-xs lg:text-sm" {...props} />
);
