import { HiLocationMarker } from 'react-icons/hi';
import { AiFillHeart } from 'react-icons/ai';
import { MdGroup } from 'react-icons/md';

/**
 * A component that render the details of a venue
 * @component
 * @param {Object} props The component props
 * @param {number} props.rating The rating of the venue
 * @param {string} props.name The name of the venue
 * @param {string} props.address The address of the venue
 * @param {string} props.city The city of the venue
 * @param {number} props.maxGuests The maximum number of guests allowed
 * @returns {React.ReactElement} return details component
 * @example
 * <Details rating={props.rating} name={props.name} address={props.address} city={props.city} maxGuests={props.maxGuests} />
 */

function Details({ rating, name, address, city, maxGuests }) {
  return (
    <div className="venue-detail-details">
      <div className="venue-detail-details-title">
        <h1 className="venue-detail-h1 my-2">{name}</h1>
        {rating > 0 && (
          <div className="venue-detail-rating">
            <AiFillHeart /> <span>{rating}</span>
          </div>
        )}
      </div>
      <div className="venue-detail-location mt-3">
        <div>
          <HiLocationMarker size={18} className="mb-1" />
          <span className="ms-1">
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
        </div>
        <div>
          <MdGroup size={18} className="mb-1" />
          <span className="ms-1" style={{ color: 'var(--color-lightgray)' }}>
            {maxGuests} Guests
          </span>
        </div>
      </div>
    </div>
  );
}

export default Details;
