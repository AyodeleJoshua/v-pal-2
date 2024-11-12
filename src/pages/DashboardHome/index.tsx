import styles from './dashboardHome.module.css';
import hompeageCards from './homepageCardsInfo';
import DashboardHomeCard from '../../components/DashboardHomeCard';

function DashboardHome() {
  return (
    <div className={styles.home_container}>
      <div className={styles.card_group}>
        {hompeageCards.map((hompeageCard) => (
          <DashboardHomeCard
            avatar={hompeageCard.avatar}
            bgColor={hompeageCard.bgColor}
            contentInfo={hompeageCard.contentInfo}
            team={hompeageCard.team}
            key={hompeageCard.key}
            contentBg={hompeageCard.contentBg}
            isfooterButton={hompeageCard.isfooterButton}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardHome;
