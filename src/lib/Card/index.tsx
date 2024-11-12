import { ReactNode } from 'react';
import styles from './card.module.css';

interface CardProps {
  bordered?: boolean;
  backgroundColor?: string;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  padding?: 'full' | 'reduced';
}

function Card({
  bordered = true,
  backgroundColor = 'transparent',
  children,
  footer,
  title,
  padding = 'full',
}: CardProps) {
  return (
    <div
      className={`${styles.card} ${bordered && styles.card_border}`}
      style={{ backgroundColor }}
    >
      {title && (
        <div className={`${styles.card_item} ${styles.card_title}`}>
          {title}
        </div>
      )}
      <div className={styles[padding]}>{children}</div>
      {footer && (
        <div className={`${styles.card_item} ${styles.card_footer}`}>
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;
