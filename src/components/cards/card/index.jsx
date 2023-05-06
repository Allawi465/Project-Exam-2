import { useState } from 'react';
import VenueCarousel from '../../carousel/card';
import { Owner, Details, Facilities, RentBtn } from './ui';

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
