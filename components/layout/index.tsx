import classNames from 'classnames'
import Footer from 'components/footer'
import Head from 'components/head'
import Link from 'components/link'
import PageContainer from 'components/page-container'
import useAuth from 'hooks/use-auth'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'

const Layout: React.FC<{ className?: string }> = ({ children, className }) => {
  const router = useRouter()
  const { data: { status: isAuthenticated } = {} } = useAuth()

  useEffect(() => {
    if (isAuthenticated) router.push('/')
  }, [isAuthenticated, router])
  return isAuthenticated ? (
    <Fragment />
  ) : (
    <>
      <Head />
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <main
          className={classNames(
            'bg-gray-100 pb-8 justify-center items-center flex flex-col flex-1',
            className
          )}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

const navLinkStyles = 'text-xs lg:text-sm'

const Header: React.FC = () => (
  <header className="bg-gray-700 text-gray-200 px-0 py-3 md:py-4">
    <PageContainer className={'lg:flex flex-row justify-between'}>
      <div className="flex items-center justify-center">
        <img src="/company-logo.svg" style={{ width: 55, maxWidth: '20%' }} />
        <img src="/company-text-primary.svg" width="150" className="ml-2" />
      </div>
      <div className="mt-3 lg:mt-0 flex justify-center  lg:grid grid-flow-col-dense gap-2 items-center">
        <Link href="/login" className={navLinkStyles}>
          Login
        </Link>
        <Link href="/signup/graduate" className={navLinkStyles}>
          <span>Graduates</span>
        </Link>
        <Link href="/signup/company" className={navLinkStyles}>
          <span>Companies</span>
        </Link>
      </div>
    </PageContainer>
  </header>
)

export default Layout
