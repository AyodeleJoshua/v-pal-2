import Typography from '../../lib/Typography';
import styles from './textWithIcon.module.css';

interface TextWithIconProps {
  icon: string;
  text: string;
  count?: number;
}

function TextWithIcon({ text, icon, count }: TextWithIconProps) {
  return (
    <div className={styles.container}>
      <div className={styles.typo_with_icon}>
        <img width="32px" height="32px" src={icon} alt="" />
        <Typography.Text weight="bold">{text}</Typography.Text>
      </div>
      {count && <Typography.Text>{count}</Typography.Text>}
    </div>
  );
}

export default TextWithIcon;
