import classNames from 'classnames'
import Button from 'components/button'
import Footer from 'components/footer'
import Head from 'components/head'
import LoadingSpinner from 'components/loading-spinner'
import PageContainer from 'components/page-container'
import useAuth from 'hooks/use-auth'
import useLogin from 'hooks/use-login'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const deadCenterStyles = 'flex items-center justify-center'

const Layout: React.FC = (props) => {
  const router = useRouter()
  const { data: { status: isAuthenticated } = {} } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) router.push('/login')
  }, [isAuthenticated, router])

  return isAuthenticated ? (
    <div>
      <Head />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  ) : (
    <div className="flex items-center justify-center w-screen h-screen">
      <LoadingSpinner />
    </div>
  )
}

const navLinkStyles =
  'text-xs lg:text-sm lg:border lg:rounded-full lg:border-gray-200'

const Header: React.FC = () => {
  const { logout } = useLogin()
  return (
    <header className="bg-gray-900 text-gray-200 px-0 py-3 md:py-6">
      <PageContainer className="lg:flex flex-row justify-between">
        <div className={classNames(deadCenterStyles, '')}>
          <img src="/company-logo.svg" style={{ width: 55, maxWidth: '20%' }} />
          <img src="/company-text-primary.svg" width="150" className="ml-2" />
        </div>
        <div className="mt-4 lg:mt-0 flex justify-center  lg:grid grid-flow-col-dense gap-2 items-center">
          <Button onClick={logout} className={navLinkStyles}>
            Logout
          </Button>
        </div>
      </PageContainer>
    </header>
  )
}

export default Layout
