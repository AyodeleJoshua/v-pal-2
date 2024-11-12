import BudgetRoomFinancialYearSection from '../../components/BudgetRoomFinancialYearSection';
import { Tabs } from '../../lib';

const budgetRoomTabOptions = [
  { key: '1', label: 'Currency and Taxes' },
  { key: '2', label: 'Budget line' },
  { key: '3', label: 'Budget room centre' },
  { key: '4', label: 'Budget control' },
];
function BudgetRoom() {
  return (
    <>
      <Tabs tabs={budgetRoomTabOptions} variant="basic" />
      <BudgetRoomFinancialYearSection />
    </>
  );
}

export default BudgetRoom;
