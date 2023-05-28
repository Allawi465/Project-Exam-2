import { useState } from 'react';
import VenueCarousel from '../../carousel/card';
import { Owner, Details, Facilities, RentBtn, Bookings } from './ui';

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
 * @property {function} Bookings Component that render bookings of the venue
 * @property {function} RentBtn component that render the rental price of a venue and provides a button to rent it
 * @returns {React.ReactElement} return Venue component
 * @example
 * <Venue data={data} />
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

  const { avatar, email, name: ownerName } = owner || {};
  const { address, city, country } = location || {};
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
            country={country}
            name={name}
            address={address}
            city={city}
            maxGuests={maxGuests}
          />
          <Owner avatar={avatar} ownerName={ownerName} email={email} />

          <Bookings ownerName={ownerName} bookings={bookings} />

          <Facilities
            breakfast={breakfast}
            wifi={wifi}
            pets={pets}
            parking={parking}
          />
          <div className="venue-description">
            <p className="text-break">
              {description &&
                (showMore ? description : `${description.slice(0, 600)}`)}
              {description && description.length > 600 && (
                <button onClick={handleReadMoreClick}>
                  {showMore ? 'Show Less' : 'Show More'}
                </button>
              )}
            </p>
          </div>
          <RentBtn price={price} id={id} ownerName={ownerName} />
        </div>
      </div>
    </>
  );
}

export default Venue;
