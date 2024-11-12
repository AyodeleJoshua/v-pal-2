import { useState } from 'react';
import styles from './tab.module.css'; // Import the CSS module
import { TabsProps } from './tabsType';

function Tabs({
  tabs,
  onTabsChange,
  variant = 'segmented',
  defaultSelected,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultSelected || tabs[0].key);

  const handleTabClick = (tabInfo: { key: string; label: string }) => {
    if (activeTab === tabInfo.key) return;
    setActiveTab(tabInfo.key);
    if (onTabsChange) {
      onTabsChange(tabInfo.key);
    }
  };

  const isBasicTab = variant === 'basic';

  return (
    <div className={styles.tabsContainer}>
      <div className={`${styles.tabs} ${isBasicTab && styles.basicTabs}`}>
        {tabs.map((tab) => (
          <div
            className={`${isBasicTab && styles.basicTabContainer} ${
              isBasicTab && tab.key === activeTab && styles.basicActive
            }`}
            key={tab.key}
          >
            <button
              type="button"
              key={tab.key}
              className={`${styles.tab} ${isBasicTab && styles.basicTab}  ${
                !isBasicTab && tab.key === activeTab && styles.active
              } ${
                isBasicTab && tab.key === activeTab && styles.activeBasicTab
              }`}
              onClick={() => handleTabClick({ key: tab.key, label: tab.label })}
            >
              {tab.icon && <img src={tab.icon} alt="" />}
              {' '}
              <p>{tab.label}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
