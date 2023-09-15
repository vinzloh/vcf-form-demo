import classNames from 'classnames';
import styles from './index.module.scss';

export const PieProgress = () => (
  <div className={classNames(styles['container'], 'flex justify-center')}>
    <div className={styles['pie-wrapper']}>
      <span className={styles['label']}>
        <div>40%</div>
        <div>Live</div>
      </span>
      <div className={styles['pie']}>
        <div
          className={[styles['left-side'], styles['half-circle']].join(' ')}
        ></div>
        <div
          className={[styles['right-side'], styles['half-circle']].join(' ')}
        ></div>
      </div>
      <div className={styles['shadow']}></div>
    </div>
  </div>
);
