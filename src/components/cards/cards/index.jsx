import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { useGetApi } from '../../../hooks/index';
import { Loading, ErrorMessage } from '../../index';
import VenuesCarousel from '../../carousel/cards';
import VenuesFacilities from './facilities';
import { AiFillHeart } from 'react-icons/ai';

/**
 * A component that renders a list of venues retrieved from an API endpoint
 * @component
 * @param {Object} props The component props
 * @param {Array} props.media The media array containing images of the venue
 * @param {Number} props.price The price of the venue per night
 * @param {String} props.name The name of the venue
 * @param {Number} props.rating The rating of the venue
 * @param {String} props.id The id of the venue
 * @param {Object} props.meta The metadata object containing information about the venue's amenities
 * @param {boolean} props.meta.breakfast Indicates if the venue provides breakfast
 * @param {boolean} props.meta.wifi Indicates if the venue provides free WiFi
 * @param {boolean} props.meta.pets Indicates if pets are allowed in the venue
 * @param {boolean} props.meta.parking Indicates if free parking is available at the venue
 * @property {function} VenuesCarousel A component that displays a carousel with an array of media for a venue
 * @property {function} useGetApi A hook for get API
 * @property {function} ErrorMessage A function to display error message if api return error
 * @property {function} Loading A function to display spinner when api load
 * @property {function} Facilities A component that renders the home facilities breakfast, WiFi, pets, and parking
 * @returns {React.ReactElement} return Venues component
 * @example
 * <Venue data={props.data} />
 */

function Venues() {
  const { data, isLoading, isError } = useGetApi(
    `/venues?_owner=true&_bookings=true&limit=50&sort=created`
  );

  console.log(data);

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
        data.map((venue) => (
          <Col xs={12} sm={6} md={4} lg={4} key={venue.id}>
            <Card className="mt-2 mb-4">
              {venue.media && (
                <VenuesCarousel media={venue.media} name={venue.name} />
              )}
              <Card.Body>
                <div className="card-title mt-1 mb-0">
                  <h5 className="card-title-title">{venue.name}</h5>
                  {venue.rating > 0 && (
                    <div className="venue-detail-rating">
                      <AiFillHeart /> <span>{venue.rating}</span>
                    </div>
                  )}
                </div>
                <div className="card-text">
                  <div className="card-text-address">
                    {!venue.location.address ||
                    venue.location.address === 'Unknown' ||
                    !venue.location.city ||
                    venue.location.city === 'Unknown' ? (
                      <p>Unknown location</p>
                    ) : (
                      <p>
                        {venue.location.address}, {venue.location.city}
                      </p>
                    )}
                  </div>
                  <div className="card-text-container">
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

export default Venues;
