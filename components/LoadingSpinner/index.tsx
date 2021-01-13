import styles from './LoadingSpinner.module.scss'
import { CSSProperties } from 'react'

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
