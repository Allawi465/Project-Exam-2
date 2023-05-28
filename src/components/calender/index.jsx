import Calendar from 'react-calendar';

/**
 * A calendar component for selecting dates with date ranges for the end date
 * @component
 * @param {Object} props The component props
 * @param {Function} props.onChange The function called when the selected dates change
 * @param {Function} props.tileDisabled The function used to check if a tile date should be disabled
 * @param {string} props.value The selected date value
 * @param {string} props.className The class name for the component
 * @returns {React.ReactElement} return Calender component
 * @example
 * <Calender
 *   onChange={handleDateChange}
 *   tileDisabled={disableDate}
 *   value={selectedDate}
 *   className="calendar"
 * />
 */

function Calender({ onChange, tileDisabled, value, className }) {
  return (
    <Calendar
      onChange={onChange}
      value={value}
      selectRange={true}
      tileDisabled={tileDisabled}
      minDate={new Date()}
      className={className}
    />
  );
}

export default Calender;
