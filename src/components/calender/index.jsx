import Calendar from 'react-calendar';
import { useBookingCalendar } from '../../hooks';

function Calender({ bookings }) {
  const { date, handleSelect, unavailableDays } = useBookingCalendar(bookings);

  return (
    <Calendar
      onChange={handleSelect}
      value={date}
      selectRange={true}
      tileDisabled={unavailableDays}
      minDate={new Date()}
    />
  );
}

export default Calender;
