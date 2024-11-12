import { Button, Card } from '../../lib';
import TextWithIcon from '../TextWithIcon';
import buildingIcon from '../../assets/icons/building.svg';
import communitiesIcon from '../../assets/icons/communities.svg';
import upgradeIcon from '../../assets/icons/upgrade.svg';
import styles from './teamsInfoCard.module.css';
import FlexedTypographyWithBadge from '../FlexedTypographyWithBadge';

const TeamsInfoCard = () => {
  return (
    <Card bordered>
      <div className={styles.card_content}>
        <FlexedTypographyWithBadge text="TEAMS" />
        <div className={styles.card_body}>
          <TextWithIcon icon={buildingIcon} text="Departments" count={0} />
          <TextWithIcon
            icon={communitiesIcon}
            count={0}
            text="Lagos, Nigeria"
          />
          <Button
            variant="ghost"
            hasIcon
            iconPosition="left"
            icon={upgradeIcon}
          >
            Upgrade your plan
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TeamsInfoCard;
