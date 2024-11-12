import { Avatar, Button, Card, DotSeperator } from '../../lib';
import Typography from '../../lib/Typography';
import styles from './dashboardHomeCard.module.css';
import contractEditIcon from '../../assets/icons/contract_edit.svg';
import addIcon from '../../assets/icons/add.svg';

interface DashboardHomeProps {
  contentInfo?: string;
  team?: string;
  avatar?: string;
  bgColor?: string;
  contentBg?: string;
  isfooterButton: boolean;
}

const DashboardHomeCard = ({
  contentInfo,
  team,
  avatar,
  bgColor,
  contentBg,
  isfooterButton,
}: DashboardHomeProps) => {
  return (
    <div className={styles.card}>
      <Card bordered={false} backgroundColor={bgColor} padding="reduced">
        <div className={styles.card_content}>
          <div
            className={`${styles.card_content_text_container} ${
              !contentInfo && styles.center_content
            }`}
            style={{ backgroundColor: contentBg }}
          >
            {contentInfo ? (
              contentInfo
            ) : (
              <div className={styles.outer_container}>
                <div className={styles.add_icon_container}>
                  <img src={addIcon} alt="" />
                </div>
              </div>
            )}
          </div>
          <div className={styles.card_footer}>
            {isfooterButton ? (
              <Button
                variant="ghost"
                hasIcon={true}
                icon={contractEditIcon}
                iconPosition="left"
              >
                Create a department
              </Button>
            ) : (
              <>
                <div className={styles.card_footer_info_container}>
                  <Typography.Text weight="bold">{team}</Typography.Text>
                  <div className={styles.user_info}>
                    <Typography.Text size="small">1 Department</Typography.Text>
                    <DotSeperator size="small" />
                    <Typography.Text size="small">1 Unit</Typography.Text>
                  </div>
                </div>
                <div>
                  <Avatar size={40} imageSource={avatar || ''} />
                </div>
              </>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DashboardHomeCard;
