export interface TabItemProp {
  key: string;
  label: string;
  icon?: string;
}

interface TabsProps {
  tabs: TabItemProp[];
  onTabsChange?: (key: string) => void;
  variant?: 'segmented' | 'basic';
  defaultSelected?: string;
}
