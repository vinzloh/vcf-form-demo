import { type CSSProperties } from 'react';

import styles from './index.module.scss';

export const LoadingSpinner = ({ size = '80px' }: { size?: string }) => (
  <div
    style={{ '--loading-spinner-size': size } as CSSProperties}
    className={styles['lds-ripple']}
  >
    <div />
    <div />
  </div>
);
