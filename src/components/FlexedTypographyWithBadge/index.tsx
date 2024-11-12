import { Badge } from '../../lib';
import Typography from '../../lib/Typography';
import styles from './flexTypographyWithBadge.module.css';

interface FlexedTypographyWithBadge {
  text?: string;
  showBadge?: boolean;
  showAssociatedField?: boolean;
  flagSrc?: string;
  flagLabel?: string;
  fieldText?: string;
  showHead?: boolean;
}

const FlexedTypographyWithBadge = ({
  text,
  showBadge = true,
  flagSrc,
  flagLabel,
  fieldText,
  showHead = true,
  showAssociatedField,
}: FlexedTypographyWithBadge) => {
  return (
    <div>
      {showHead && (
        <div
          className={`${styles.card_title} ${
            showAssociatedField && styles.adjustPaddingButtom
          }`}
        >
          <Typography.Text>{text}</Typography.Text>
          {showBadge && <Badge text="Basic User" />}
        </div>
      )}
      {showAssociatedField && (
        <div className={styles.field}>
          {flagSrc && (
            <div className={styles.currencyDisplay}>
              <img src={flagSrc} alt="" />
              <div>{flagLabel}</div>
            </div>
          )}
          {fieldText && <span>{fieldText}</span>}
        </div>
      )}
    </div>
  );
};

export default FlexedTypographyWithBadge;
