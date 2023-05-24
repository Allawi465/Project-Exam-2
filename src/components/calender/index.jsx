import Calendar from 'react-calendar';

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
