import classNames from 'classnames'
import { Fragment } from 'react'
import RightArrowSVG from 'public/right-arrow.svg'
export interface IStep {
  isActive?: boolean
  text: string
}
interface ISteps {
  steps: Array<IStep>
}

const Steps: React.FC<ISteps> = ({ steps }) => {
  const Pill: React.FC<{ isActive?: boolean; step: number }> = ({
    isActive,
    children,
    step,
  }) => (
    <div
      className={classNames(
        'text-center px-3 py-3 w-full max-w-xs items-center flex flex-col text-xs sm:text-base text-gray-500',
        'bg-white',
        isActive && 'text-primary'
      )}
    >
      <div
        className={classNames(
          'border rounded-full w-8 h-8 mb-1 flex items-center justify-center text-lg font-semibold',
          isActive && 'border-primary text-white bg-primary'
        )}
      >
        {step}
      </div>
      {children}
    </div>
  )
  return (
    <div
      style={{ top: -1 }}
      className="flex w-full justify-center sticky z-10 mb-10 bg-white"
    >
      {steps.map(({ isActive, text }, index) => (
        <Fragment key={index}>
          <Pill isActive={isActive} step={index + 1}>
            {text}
          </Pill>
          {index !== steps.length - 1 && (
            <div className="flex text-gray-500">
              <RightArrowSVG className="sm:w-6" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
export default Steps
