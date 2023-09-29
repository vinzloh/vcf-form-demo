import * as React from 'react';

import './index.css';

const size = 160;
const barR = 90;
const rFactor = 2.25;

export interface ProgressCircleProps {
  finalPercent: number;
}

export function ProgressCircle({ finalPercent }: ProgressCircleProps) {
  const strokeDashArray = 510;
  const [percent, setPercent] = React.useState(0);
  const [strokeDashoffset, setStrokeDashoffset] = React.useState(0);
  const [dataPercent, setDataPercent] = React.useState(100);

  React.useEffect(() => {
    setPercent(finalPercent);
  }, [finalPercent]);

  React.useEffect(() => {
    let newPercent = percent;

    if (isNaN(newPercent)) {
      newPercent = 100;
    } else {
      const r = barR;
      const c = Math.PI * (r * 2);
      if (newPercent < 0) newPercent = 0;
      if (newPercent > 100) newPercent = 100;
      const pct = ((100 - newPercent) / 100) * c;

      setStrokeDashoffset(pct);
      setDataPercent(newPercent);
    }
  }, [percent]);

  return (
    <div
      id="progress-circle-container"
      data-percent={`${dataPercent}% Live`}
      style={
        {
          '--size': `${size}px`,
          '--delay': percent > 0 ? '0.35s' : '0s',
        } as React.CSSProperties
      }
    >
      <svg
        // credits https://codepen.io/JMChristensen/pen/AGbeEy
        // viexwPort="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r={size / rFactor}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          strokeDasharray={strokeDashArray}
          strokeDashoffset="100"
        />
        <circle
          id="bar"
          r={size / rFactor}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          strokeDasharray={strokeDashArray}
          style={{ strokeDashoffset }}
        />
      </svg>
    </div>
  );
}
