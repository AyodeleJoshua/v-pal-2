import { Button, Card } from '../../lib';
import Typography from '../../lib/Typography';
import styles from './linkscard.module.css';
import visitWebIcon from '../../assets/icons/visit-globe.svg';

function LinksCard() {
  return (
    <Card bordered>
      <div className={styles.card_content}>
        <div className={styles.card_title}>
          <Typography.Text>Links</Typography.Text>
        </div>
        <div className={styles.card_body}>
          <Button
            variant="ghost"
            hasIcon
            iconPosition="left"
            icon={visitWebIcon}
            contentAlign="left"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default LinksCard;
