import * as React from 'react';

import { LoadingSpinner } from '@/components/loading-spinner';
import { useAuth } from '@/hooks/use-auth';

interface AuthenticatedLayoutProps {
  children?: React.ReactNode;
}

export function Authenticated({ children }: AuthenticatedLayoutProps) {
  const { isLoading, data: { status: isAuthenticated } = {} } = useAuth();

  React.useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) window.location.assign('/login');
  }, [isAuthenticated, isLoading]);

  return isAuthenticated ? <>{children}</> : <LoadingSpinner />;
}
