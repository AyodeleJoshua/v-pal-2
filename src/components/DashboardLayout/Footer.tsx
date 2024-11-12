import { Link } from 'react-router-dom';
import style from './dashboardLayout.module.css';
import { DotSeperator } from '../../lib';

function Footer() {
  return (
    <div className={style.sidebar_footer}>
      <Link to="/" className={style.sidebar_link}>
        Terms of service
      </Link>
      <DotSeperator />
      <Link className={style.sidebar_link} to="/">
        Privacy Policy
      </Link>
    </div>
  );
}

export default Footer;
