import { useContext } from 'react';
import { AuthContext } from '../../../../../api';
import { load } from '../../../../../utils/localStorage';
import { Calender } from '../../../../index';
import { BsCalendarDate } from 'react-icons/bs';
import { useBookingCalendar } from '../../../../../hooks';
import BookingsTable from './tableBookings';
/**
 * A component that render the rental price of a venue and provides a button to rent it
 * @component
 * @param {Object} props The component props
 * @param {number} props.price The price of the venue rental
 * @returns {React.ReactElement} return venue price and a button to rent it as a component
 * @example
 * <Rent price={props.price} />
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
