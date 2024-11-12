import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iconPosition?: 'left' | 'right';
  icon?: string;
  hasIcon?: boolean;
  variant: 'primary' | 'ghost';
  contentAlign?: 'left' | 'center';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    icon, iconPosition, hasIcon, variant, contentAlign, ...props
  }, ref) => (
    <button
      type="button"
      className={`${styles.button} ${
        variant === 'primary' ? styles.primary_button : styles.ghost_button
      } ${styles[contentAlign || 'center']}`}
      ref={ref}
      {...props}
    >
      {hasIcon && iconPosition === 'left' && icon && <img src={icon} alt="" />}
      <span>{props.children}</span>
      {hasIcon && iconPosition === 'right' && icon && <img src={icon} alt="" />}
    </button>
  ),
);

Button.displayName = 'Button';

export default Button;
