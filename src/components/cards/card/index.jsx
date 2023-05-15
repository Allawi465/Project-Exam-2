import { useState } from 'react';
import VenueCarousel from '../../carousel/card';
import { Owner, Details, Facilities, RentBtn } from './ui';

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
    price,
    rating,
    owner,
    description,
    location,
  } = data;
  const { avatar, email, name: ownerName } = owner || {};
  const { address, city } = location || {};
  const { breakfast, parking, pets, wifi } = meta || {};

  const handleReadMoreClick = () => {
    setShowMore(true);
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
          <Facilities
            breakfast={breakfast}
            wifi={wifi}
            pets={pets}
            parking={parking}
          />
          <div className="venue-description my-3">
            <p>
              {description &&
                (showMore ? description : `${description.slice(0, 350)}...`)}
              {description && description.length > 350 && !showMore && (
                <button onClick={handleReadMoreClick}>Read More</button>
              )}
            </p>
          </div>
          <RentBtn price={price} />
        </div>
      </div>
    </>
  );
}

export default Venue;
