import propTypes from 'prop-types';
import styles from './styles.module.scss';

const classesMapper = {
  primary: styles['button--primary'],
  secondary: styles['button--secondary'],
};

const mapVariantToClass = (variant) => classesMapper[variant];

const Button = ({
  children,
  onClick,
  className,
  variant,
}) => (
  <button
    className={`${styles.button} ${mapVariantToClass(variant)} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  variant: propTypes.oneOf(['primary', 'secondary']),
}

Button.defaultProps = {
  variant: 'primary',
}

export default Button;
