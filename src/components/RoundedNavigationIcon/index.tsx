import styles from './roundedNaviagationIcon.module.css';

interface RoundedNavigationProps {
  iconSvg: string;
}

function RoundedNavigationIcon({ iconSvg }: RoundedNavigationProps) {
  return (
    <div className={styles.iconContainer}>
      <img src={iconSvg} alt="" />
    </div>
  );
}

export default RoundedNavigationIcon;
