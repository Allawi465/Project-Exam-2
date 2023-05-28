import { useContext } from 'react';
import { AuthContext } from '../../../../../api';
import { load } from '../../../../../utils/localStorage';
import { Calender } from '../../../../index';
import { BsCalendarDate } from 'react-icons/bs';
import { useBookingCalendar } from '../../../../../hooks';
import BookingsTable from './tableBookings';
/**
 * A component that render venue bookings
 * @component
 * @param {Object} props The component props
 * @param {string} props.ownerName The name of the profile
 * @param {Array} props.bookings The bookings data of the venue
 * @property {function} BookingsTable A function that render the bookings as table
 * @returns {React.ReactElement} return profile bookings
 * @example
 * <Bookings ownerName={ownerName} bookings={bookings} />
 */

function Bookings({ ownerName, bookings }) {
  const { dataLogin } = useContext(AuthContext);
  const { handleSelect, unavailableDays, date } = useBookingCalendar(bookings);
  const name = (dataLogin && dataLogin.name) || load('user')?.name;

  return (
    <>
      {ownerName === name ? (
        <div>
          {bookings && bookings.length > 0 ? (
            <BookingsTable bookings={bookings} />
          ) : (
            <div>
              <h5>
                Available dates
                <BsCalendarDate
                  size={25}
                  className="mx-2 mb-2"
                  style={{ color: '#673BBF' }}
                />
              </h5>
              <Calender
                onChange={handleSelect}
                value={date}
                tileDisabled={unavailableDays}
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          <h5>
            Available dates
            <BsCalendarDate
              size={25}
              className="mx-2 mb-2"
              style={{ color: '#673BBF' }}
            />
          </h5>
          <Calender
            onChange={handleSelect}
            value={date}
            tileDisabled={unavailableDays}
          />
        </div>
      )}
    </>
  );
}

export default Bookings;
