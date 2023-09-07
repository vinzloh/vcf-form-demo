import { type CSSProperties } from 'react'

import styles from './loading-spinner.module.scss'

const LoadingSpinner: React.FC<{ size?: string }> = ({ size = '80px' }) => (
  <div
    style={{ '--loading-spinner-size': size } as CSSProperties}
    className={styles['lds-ripple']}
  >
    <div />
    <div />
  </div>
)
export default LoadingSpinner
