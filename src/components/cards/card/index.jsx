import { useState } from 'react';
import VenueCarousel from '../../carousel/card';
import { Owner, Details, Facilities, RentBtn } from './ui';
import { Calender } from '../../index';
import { BsCalendarDate } from 'react-icons/bs';
import { useBookingCalendar } from '../../../hooks';

/**
 * A component that render a single venue by id
 * @component
 * @param {Object} data The venue data object
 * @param {String} data.description The description of the venue
 * @property {function} setShowMore Show the rest of the description length
 * @property {function} handleReadMoreClick Handle function to trigger the setShowMore function
 * @property {function} VenueCarousel Displaying carousel with an array of media to the venue
 * @property {function} Details Component that render the details of a venue
 * @property {function} Facilities Component that renders the home facilities breakfast, WiFi, pets, and parking
 * @property {function} Owner Component that render information about the owner of a property
 * @property {function} RentBtn component that render the rental price of a venue and provides a button to rent it
 * @returns {React.ReactElement} return Venue component
 * @example
 * <Venue data={props.data} />
 */

function Venue({ data }) {
  const [showMore, setShowMore] = useState(false);
  const {
    media,
    maxGuests,
    meta,
    name,
    bookings,
    price,
    rating,
    owner,
    description,
    location,
    id,
  } = data;
  const { handleSelect, unavailableDays, date } = useBookingCalendar(bookings);

  const { avatar, email, name: ownerName } = owner || {};
  const { address, city } = location || {};
  const { breakfast, parking, pets, wifi } = meta || {};

  const handleReadMoreClick = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <>
      <div className="venue mt-4">
        {media && <VenueCarousel media={media} name={name} />}
        <div className="venue-detail">
          <Details
            rating={rating}
            name={name}
            address={address}
            city={city}
            maxGuests={maxGuests}
          />
          <Owner avatar={avatar} ownerName={ownerName} email={email} />

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
          <Facilities
            breakfast={breakfast}
            wifi={wifi}
            pets={pets}
            parking={parking}
          />
          <div className="venue-description">
            <p className="text-break">
              {description &&
                (showMore ? description : `${description.slice(0, 500)}...`)}
              {description && description.length > 500 && (
                <button onClick={handleReadMoreClick}>
                  {showMore ? 'Show Less' : 'Show More'}
                </button>
              )}
            </p>
          </div>
          <RentBtn price={price} id={id} />
        </div>
      </div>
    </>
  );
}

export default Venue;
