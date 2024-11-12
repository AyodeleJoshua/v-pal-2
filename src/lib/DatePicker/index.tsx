import { useState } from 'react';
import { Calendar } from 'react-date-range';
import { format as formatDate } from 'date-fns';
import styles from './datePicker.module.css';
import calendarIcon from '../../assets/icons/calendar.svg';

interface DatePickerProps {
  label: string;
  defaultSelected?: string;
  onDateChange?: (date: string) => void;
  format?: string;
}

function DatePicker({
  label,
  format = 'd LLLL, yy',
  onDateChange,
  defaultSelected,
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState(
    defaultSelected || 'Select Date',
  );
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className={styles.datepicker}>
      <div>{label}</div>
      <button
        type="button"
        className={styles.button}
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <img src={calendarIcon} alt="" className={styles.icon} />
        <p>{selectedDate}</p>
      </button>
      {showCalendar && (
        <Calendar
          className={styles.calendar}
          onChange={(date) => {
            const formattedDate = formatDate(date, format);
            setSelectedDate(formattedDate);
            if (onDateChange) {
              onDateChange(formattedDate);
            }
            setShowCalendar(false);
          }}
        />
      )}
    </div>
  );
}

export default DatePicker;
