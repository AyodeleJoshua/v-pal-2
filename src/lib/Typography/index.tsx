import { forwardRef } from 'react';
import { TextProps, TitleProps } from './TypographyTypes';
import styles from './typography.module.css';

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({
    level, className, children, ...props
  }, ref) => {
    const Component = level || 'h1';
    return (
      <Component role="heading" className={className} ref={ref} {...props}>
        {children}
      </Component>
    );
  },
);

Title.displayName = 'Title';

const Text = forwardRef<HTMLHeadingElement, TextProps>(
  ({
    children, weight, size, ...props
  }, ref) => (
    <p
      className={`${styles[weight || 'normal']} ${styles[size || 'medium']}`}
      {...props}
      ref={ref}
    >
      {children}
    </p>
  ),
);

Text.displayName = 'Text';

export default { Title, Text };
