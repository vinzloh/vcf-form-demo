import PrimaryButton from 'components/Button/PrimaryButton'
import classNames from 'classnames'
import TextButton from 'components/Button/TextButton'

export interface IStepsNavigation {
  onBack?: () => void
  onSkip?: () => void
  onNext?: () => void
  onFinish?: () => void
}

const StepsNavigation: React.FC<IStepsNavigation & { className?: string }> = ({
  onBack,
  onNext,
  onSkip,
  onFinish,
  className,
}) => {
  return (
    <div className={classNames('flex justify-between', className)}>
      {onBack ? <TextButton onClick={onBack}>Back</TextButton> : <div />}
      <div className="flex items-center">
        {onFinish ? (
          <PrimaryButton type="submit" onClick={onFinish}>
            Finish
          </PrimaryButton>
        ) : (
          <>
            <TextButton onClick={onSkip}>Skip</TextButton>
            <div className="ml-1" />
            <PrimaryButton type="submit" onClick={onNext}>
              Next
            </PrimaryButton>
          </>
        )}
      </div>
    </div>
  )
}
export default StepsNavigation
