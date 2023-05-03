import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../spinner';
import ErrorMessage from '../../alert';
import useGetApi from '../../../hooks/api/useGetApi';
import { HiLocationMarker } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import { BsFillChatSquareTextFill } from 'react-icons/bs';
import { BookBtn } from '../../../style/buttons';
import VenueImagesCarousel from '../../carousel';
import VenueFacilities from './facilities';
import Rating from '../../rating';

function Venue() {
  let { id } = useParams();

  const [showMore, setShowMore] = useState(false);

  const { data, isLoading, isError } = useGetApi(
    `/venues/${id}?_owner=true&_bookings=true`
  );

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: 'center' }}>
        <ErrorMessage
          variant="danger"
          text="we are aware of the issues with accessing Holidaze, our team is actively working on it."
        />
      </div>
    );
  }

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
        {media && <VenueImagesCarousel media={media} name={name} />}

        <div className="venue-detail">
          <div className="venue-detail-details">
            <div className="venue-detail-details-title">
              <h1 className="venue-detail-h1 my-2">{name}</h1>
              {rating > 0 && (
                <div>
                  <Rating rating={rating} />
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
                <span
                  className="ms-1"
                  style={{ color: 'var(--color-lightgray)' }}
                >
                  {maxGuests} Guests
                </span>
              </div>
            </div>
          </div>
          <div className="venue-owner my-4">
            <div className="venue-owner-container d-flex">
              {avatar && (
                <img
                  src={avatar}
                  alt={ownerName}
                  width={42}
                  height={42}
                  className="rounded-circle me-2"
                />
              )}
              <div className="venue-owner-info">
                <div>
                  <p className="my-0 text-capitalize">{ownerName}</p>
                  <p
                    className="mt-1"
                    style={{ color: 'var(--color-lightgray)' }}
                  >
                    Property owner
                  </p>
                </div>
                <a
                  className="venue-owner-info-mail mt-1"
                  href={`mailto:${email}`}
                >
                  <BsFillChatSquareTextFill />
                </a>
              </div>
            </div>
          </div>
          <VenueFacilities
            breakfast={breakfast}
            wifi={wifi}
            pets={pets}
            parking={parking}
          />
          <div className="venue-description mt-2">
            <p>
              {description &&
                (showMore ? description : `${description.slice(0, 150)}...`)}
              {description && description.length > 150 && !showMore && (
                <button onClick={handleReadMoreClick}>Read More</button>
              )}
            </p>
          </div>
          <div className="venue-prices my-4">
            <div className="venue-prices-container">
              <p className="venue-prices-container-price">
                ${price}{' '}
                <span className="venue-prices-container-price-night">
                  /Night
                </span>
              </p>
              <span>Payment estimation</span>
            </div>
            <BookBtn className="mt-2">Rent</BookBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default Venue;
