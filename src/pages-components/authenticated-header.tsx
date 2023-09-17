import { Button } from '@/components/button';
import { PageContainer } from '@/components/page-container';
import { useLogin } from '@/hooks/use-login';

export function AuthedHeader() {
  const { logout } = useLogin();
  return (
    <header className="bg-gray-700 text-gray-200 px-0 py-3 md:py-4">
      <PageContainer className="lg:flex flex-row justify-between">
        <div className="flex items-center justify-center">
          <img src="/company-logo.svg" style={{ width: 55, maxWidth: '20%' }} />
          <img src="/company-text-primary.svg" width="150" className="ml-2" />
        </div>
        <div className="mt-4 lg:mt-0 flex justify-center  lg:grid grid-flow-col-dense gap-2 items-center">
          <Button
            onClick={logout}
            className="text-xs lg:text-sm lg:border lg:rounded-full lg:border-gray-200"
          >
            Logout
          </Button>
        </div>
      </PageContainer>
    </header>
  );
}
