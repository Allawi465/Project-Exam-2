import { HiLocationMarker } from 'react-icons/hi';
import { AiFillHeart } from 'react-icons/ai';
import { MdGroup } from 'react-icons/md';

function Details({ rating, name, address, city, maxGuests }) {
  return (
    <div className="venue-detail-details">
      <div className="venue-detail-details-title">
        <h1 className="venue-detail-h1 my-2">{name}</h1>
        {rating > 0 && (
          <div className='venue-detail-rating'>
            <AiFillHeart /> <span>{rating}</span>
          </div>
        )}
      </div>
      <div className="venue-detail-location mt-3">
        <div>
          <HiLocationMarker size={18} className="mb-1" />
          <span className="ms-1">
            {address && city ? `${address}, ${city}` : 'Unknown location'}
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
