import defaultImages from '../../images/default.jpg';
import { AiFillHeart } from 'react-icons/ai';
import { BookingForm } from '../../form';

/**
 * A component that render the venue booking form
 * @component
 * @param {Object} props The component props
 * @param {number} props.rating The rating of the venue
 * @param {string} props.name The name of the venue
 * @param {string} props.address The address of the venue
 * @param {string} props.city The city of the venue
 * @param {number} props.maxGuests The maximum number of guests allowed
 * @param {Array} props.data.bookings The bookings data of the venue
 * @returns {React.ReactElement} return details component
 * @example
 * <Bookings data={data} />
 */

function Booking({ data }) {
  const { media, name, price, rating, location, bookings, maxGuests, id } =
    data;
  const { address, city } = location || {};

  return (
    <div className="bookings my-4">
      <div className="bookings-booking">
        <div className="bookings-booking-container">
          <div className="bookings-booking-container-img">
            {media && media.length > 0 ? (
              <img
                src={media[0]}
                alt={name}
                onError={(e) => {
                  e.target.src = defaultImages;
                }}
              />
            ) : (
              <img src={defaultImages} alt={`${name} default`} />
            )}
          </div>
          <div className="bookings-booking-container-info">
            <div className="venue-detail-details-title">
              <h1 className="venue-detail-h1 my-2">{name}</h1>
              {rating > 0 && (
                <div className="venue-detail-rating mx-2">
                  <AiFillHeart /> <span>{rating}</span>
                </div>
              )}
            </div>
            <span>
              {!address ||
              address === 'Unknown' ||
              !city ||
              city === 'Unknown' ? (
                <span>Unknown location</span>
              ) : (
                <span>
                  {address}, {city}
                </span>
              )}
            </span>
            <div className="mt-2">
              <p>
                ${price}
                <span> / Night</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bookings-form">
        <BookingForm
          bookings={bookings}
          maxGuest={maxGuests}
          id={id}
          price={price}
        />
      </div>
    </div>
  );
}

export default Booking;
