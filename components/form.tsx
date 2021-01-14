import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = { children: ReactNode; className?: string }

const Form = ({
  children,
  className = 'max-w-xs px-4 py-6 bg-white shadow-md',
}: Props) => (
  <form
    onSubmit={(e) => e.preventDefault()}
    className={classNames('gap-2 grid grid-cols-1', className)}
    children={children}
  />
)
export default Form
