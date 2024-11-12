import { Alert, Button, DatePicker } from '../../lib';
import styles from './budgetRoomFinancialYearSection.module.css';
import Card from '../../lib/Card/index';
import contractIcon from '../../assets/icons/contract_edit_primary.svg';
import nigeriaFlag from '../../assets/icons/nigeria-flag.svg';
import usaFlag from '../../assets/icons/usa-flag.svg';
import FlexedTypographyWithBadge from '../FlexedTypographyWithBadge';

const BudgetRoomFinancialYearSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.filterContainer}>
        <p>Financial year</p>
        <div className={styles.datepickers}>
          <DatePicker label="Start" />
          <DatePicker label="End" />
        </div>
      </div>
      <div className={styles.informationSection}>
        <div className={styles.sectionCard}>
          <Card
            title="Currency"
            footer={
              <Button
                variant="primary"
                hasIcon={true}
                iconPosition="left"
                icon={contractIcon}
              >
                Edit overview
              </Button>
            }
          >
            <div className={styles.cardContent}>
              <FlexedTypographyWithBadge
                text="Principal Currency"
                showHead
                showAssociatedField
                fieldText="Naira"
                flagLabel="NGA"
                showBadge
                flagSrc={nigeriaFlag}
              />
              <FlexedTypographyWithBadge
                text="Tax type"
                showHead
                showAssociatedField
                fieldText="Value Added Tax (VAT)"
                showBadge={false}
              />
              <div className={styles.twoColumn}>
                <div className={styles.column}>
                  <FlexedTypographyWithBadge
                    text="Tax rate"
                    showHead
                    showAssociatedField
                    fieldText="Fixed Amount"
                    showBadge={false}
                  />
                </div>
                <div className={styles.column}>
                  <FlexedTypographyWithBadge
                    text="Tax rate unit"
                    showHead
                    showAssociatedField
                    fieldText="30.00"
                    showBadge={false}
                  />
                </div>
              </div>
              <div className={styles.space}></div>
            </div>
          </Card>
        </div>
        <div className={styles.sectionCard}>
          <Card title="Conversion rate">
            <div className={styles.cardContent}>
              <FlexedTypographyWithBadge
                showHead={false}
                showAssociatedField
                fieldText="10,000"
                flagLabel="NGA"
                showBadge
                flagSrc={nigeriaFlag}
              />
              <FlexedTypographyWithBadge
                showHead={false}
                showAssociatedField
                fieldText="60.8142"
                flagLabel="USA"
                showBadge
                flagSrc={usaFlag}
              />
            </div>
          </Card>

          <Alert>
            You cannot change the Principal Currency once the financial year has
            commenced
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default BudgetRoomFinancialYearSection;
