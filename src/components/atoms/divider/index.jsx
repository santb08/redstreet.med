import styles from './styles.module.scss';

const Divider = ({
  className
}) => (
  <div className={`secondary-bg ${styles.divider} ${className}`} />
);

export default Divider;
