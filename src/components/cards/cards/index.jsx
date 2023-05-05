import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { useGetApi } from '../../../hooks/index';
import { Loading, ErrorMessage } from '../../index';
import VenuesCarousel from '../../carousel/cards';
import VenuesFacilities from './facilities';
import { AiFillHeart } from 'react-icons/ai';

function Venue() {
  const { data, isLoading, isError } = useGetApi(
    '/venues?_owner=true&_bookings=true'
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
      <div className="errorMessage">
        <ErrorMessage
          variant="danger"
          text="we are aware of the issues with accessing Holidaze, our team is actively working on it."
        />
      </div>
    );
  }

  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((venue) => (
          <Col xs={12} sm={6} md={4} lg={4} key={venue.id}>
            <Card className="mt-2 mb-4">
              {venue.media && (
                <VenuesCarousel media={venue.media} name={venue.name} />
              )}
              <Card.Body>
                <div className="card-title mt-1">
                  <h5 className="card-title-title">{venue.name}</h5>
                  {venue.rating > 0 && (
                    <div className="venue-detail-rating">
                      <AiFillHeart /> <span>{venue.rating}</span>
                    </div>
                  )}
                </div>
                <div className="card-text">
                  <div className="card-text-container">
                    <div className="card-text-date">Sep 10-10</div>
                    <VenuesFacilities
                      breakfast={venue.meta.breakfast}
                      wifi={venue.meta.wifi}
                      pets={venue.meta.pets}
                      parking={venue.meta.parking}
                    />
                  </div>
                  <div className="card-text-prices">
                    <div className="card-text-prices-container d-flex">
                      <p className="card-text-prices-price">
                        ${venue.price}
                        <span className="card-text-prices-price-night">
                          /Night
                        </span>
                      </p>
                    </div>
                    <div className="me-1">
                      <Link
                        to={`/venue/${venue.id}`}
                        className="card-text-prices-link stretched-link"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
}

export default Venue;
