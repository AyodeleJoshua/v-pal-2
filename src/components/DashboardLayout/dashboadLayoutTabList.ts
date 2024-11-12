import tree from '../../assets/icons/account_tree.svg';
import bank from '../../assets/icons/bank.svg';
import monitoring from '../../assets/icons/monitoring.svg';
import grid from '../../assets/icons/grid_view.svg';

const dashboadLayoutTabList = [
  { key: 'dashboard', label: 'Dashboard', icon: grid },
  {
    key: 'approval-workflow',
    label: 'Approval Flow',
    icon: tree,
  },
  {
    key: 'budget-room',
    label: 'Budget Room',
    icon: bank,
  },
  {
    key: 'analytics',
    label: 'Analytics',
    icon: monitoring,
  },
];

export default dashboadLayoutTabList;
