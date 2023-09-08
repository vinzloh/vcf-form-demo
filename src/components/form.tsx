import classNames from 'classnames';

type FormProps = JSX.IntrinsicElements['form'];

export const Form = ({
  children,
  className = 'max-w-xs px-4 py-6 bg-white shadow-md',
}: FormProps) => (
  <form
    onSubmit={(e) => e.preventDefault()}
    className={classNames('gap-2 grid grid-cols-1', className)}
    children={children}
  />
);
