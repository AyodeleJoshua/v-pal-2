import { Link, useLocation, useNavigate } from 'react-router-dom';
import RoundedNavigationIcon from '../RoundedNavigationIcon';
import style from './dashboardLayout.module.css';
import dashboadLayoutTabList from './dashboadLayoutTabList';
import { Tabs } from '../../lib';
import vendPalLogo from '../../assets/images/vendPal-logo.png';
import chatIcon from '../../assets/icons/chat.svg';
import notificationIcon from '../../assets/icons/notification.svg';
import config from '../../utils/config';

const navIcon = [chatIcon, notificationIcon];

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleTabChange = (key: string) => {
    navigate(`v-pal-2/${key}`);
  };

  return (
    <nav className={style.nav}>
      <div className={style.logoWithTab}>
        <Link to="/">
          <img src={vendPalLogo} alt="" />
        </Link>
        <div className={style.tab}>
          <Tabs
            tabs={dashboadLayoutTabList}
            variant="segmented"
            onTabsChange={handleTabChange}
            defaultSelected={location.pathname.replace(
              `/${config.appBaseUrl}/`,
              '',
            )}
          />
        </div>
      </div>
      <div className={style.iconsTray}>
        {navIcon.map((icon, i) => (
          <RoundedNavigationIcon key={i} iconSvg={icon} />
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
