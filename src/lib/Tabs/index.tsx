import React, { useState } from 'react';
import styles from './tab.module.css'; // Import the CSS module
import { TabsProps } from './tabsType';

const Tabs: React.FC<TabsProps> = ({
  tabs,
  onTabsChange,
  variant = 'segmented',
  defaultSelected,
}) => {
  const [activeTab, setActiveTab] = useState(defaultSelected || tabs[0].key);

  const handleTabClick = (tabInfo: { key: string; label: string }) => {
    if (activeTab === tabInfo.key) return;
    setActiveTab(tabInfo.key);
    onTabsChange && onTabsChange(tabInfo.key);
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
              key={tab.key}
              className={`${styles.tab} ${isBasicTab && styles.basicTab}  ${
                !isBasicTab && tab.key === activeTab && styles.active
              } ${
                isBasicTab && tab.key === activeTab && styles.activeBasicTab
              }`}
              aria-selected={tab.key === activeTab}
              onClick={() => handleTabClick({ key: tab.key, label: tab.label })}
            >
              {tab.icon && <img src={tab.icon} alt="" />} <p>{tab.label}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
