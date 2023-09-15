import classNames from 'classnames';
import * as React from 'react';

export interface IStep {
  isActive?: boolean;
  text: string;
}
interface ISteps {
  steps: Array<IStep>;
}

export function Steps({ steps }: ISteps) {
  return (
    <div
      style={{ top: -1 }}
      className="flex w-full justify-center sticky z-10 mb-10 bg-white"
    >
      {steps.map(({ isActive, text }, index) => (
        <React.Fragment key={index}>
          <Pill isActive={isActive} step={index + 1}>
            {text}
          </Pill>
          {index !== steps.length - 1 && (
            <div className="flex text-gray-500">
              <img src="/right-arrow.svg" className="sm:w-6" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

interface PillProps {
  isActive?: boolean;
  step: number;
  children: React.ReactNode;
}

function Pill({ isActive, children, step }: PillProps) {
  return (
    <div
      className={classNames(
        'text-center px-3 py-3 w-full max-w-xs items-center flex flex-col text-xs sm:text-base text-gray-500',
        'bg-white',
        isActive && 'text-primary',
      )}
    >
      <div
        className={classNames(
          'border rounded-full w-8 h-8 mb-1 flex items-center justify-center text-lg font-semibold',
          isActive && 'border-primary text-white bg-primary',
        )}
      >
        {step}
      </div>
      {children}
    </div>
  );
}
