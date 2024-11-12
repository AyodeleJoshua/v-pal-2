import { ReactNode } from 'react';
import styles from './alert.module.css';

interface AlertProps {
  children: ReactNode;
  type?: 'error' | 'info' | 'warning';
}

const Alert = ({ children, type = 'error' }: AlertProps) => {
  return (
    <div role="alert" className={`${styles.alert} ${styles[type]}`}>
      {children}
    </div>
  );
};

export default Alert;
