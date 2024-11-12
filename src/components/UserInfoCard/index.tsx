import { Avatar, Button, Card } from '../../lib';
import Typography from '../../lib/Typography';
import TextWithIcon from '../TextWithIcon';
import styles from './userInfoCard.module.css';
import mailIcon from '../../assets/icons/mail.svg';
import globeIcon from '../../assets/icons/globe.svg';
import filterIcon from '../../assets/icons/filter.svg';
import avatar from '../../assets/images/avatar.png';

const UserInfoCard = () => {
  return (
    <Card bordered>
      <div className={styles.card_content}>
        <div className={styles.card_title}>
          <Avatar imageSource={avatar} size={64} alt="Image of user" />
          <Typography.Title level="h2">Ventura Brondy</Typography.Title>
        </div>
        <div className={styles.card_body}>
          <TextWithIcon icon={mailIcon} text="venturaBrody@co.ng" />
          <TextWithIcon icon={globeIcon} text="Lagos, Nigeria" />
          <Button variant="ghost" hasIcon iconPosition="left" icon={filterIcon}>
            Set up your account
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default UserInfoCard;
