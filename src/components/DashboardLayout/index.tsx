import { ReactNode } from 'react';
import style from './dashboardLayout.module.css';
import Footer from './Footer';
import UserInfoCard from '../UserInfoCard';
import TeamsInfoCard from '../TeamsInfoCard';
import LinksCard from '../LinksCard';
import Navigation from './Navigation';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Navigation />
      <main className={style.main}>
        <aside className={style.sidebar}>
          <div className={style.sidebar_body}>
            <UserInfoCard />
            <TeamsInfoCard />
            <LinksCard />
          </div>
          <Footer />
        </aside>
        <div className={style.main_content}>{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
