import styles from './dotSeperator.module.css';

interface DotSeperatorProps {
  size?: 'normal' | 'small';
}

const DotSeperator = ({ size = 'normal' }: DotSeperatorProps) => {
  return <div className={`${styles.seperator} ${styles[size]}`} />;
};

export default DotSeperator;
