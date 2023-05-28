import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { useGetApi } from '../../../hooks/index';
import {
  errorMessageDisplay,
  VenuesFacilities,
  FilterVenues,
} from './ui/index';
import { Loading, ErrorMessage } from '../../index';
import VenuesCarousel from '../../carousel/cards';
import { AiFillHeart } from 'react-icons/ai';

/**
 * A component that renders a list of venues retrieved from an API endpoint
 * @component
 * @param {Object} props The component props
 * @param {Array} props.selectedDates the dates selected from filter calender
 * @param {Array} props.guests the guests number selected from filter calender
 * @param {Array} props.search the search value from the search bar
 * @param {Array} props.media The media array containing images of the venue
 * @param {Number} props.price The price of the venue per night
 * @param {String} props.name The name of the venue
 * @param {Number} props.rating The rating of the venue
 * @param {String} props.id The id of the venue
 * @param {Object} props.location The location of the venue
 * @param {Object} props.meta The metadata object containing information about the venue's amenities
 * @property {function} FilterVenues A function that filter venues by filtering with dates, number and with search value to.
 * @property {function} VenuesCarousel A component that displays a carousel with an array of media for a venue
 * @property {function} useGetApi A hook for get API
 * @property {function} ErrorMessage A function to display error message if api return error
 * @property {function} Loading A function to display spinner when api load
 * @property {function} Facilities A component that renders the home facilities breakfast, WiFi, pets, and parking
 * @returns {React.ReactElement} return Venues component
 * @example
 *  <Venues
 *   selectedDates={selectedDates}
 *   guests={guests}
 *   search={search}
 */

function Venues({ selectedDates, guests, search }) {
  const { data, isLoading, isError } = useGetApi(
    `/venues?_owner=true&_bookings=true&limit=50&sort=created`
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

  const filteredVenues = FilterVenues(data, selectedDates, guests, search);

  if (filteredVenues.length === 0) {
    return (
      <>
        <ErrorMessage
          variant="danger"
          text={errorMessageDisplay(search, guests, selectedDates)}
        />
      </>
    );
  }

  return (
    <>
      {filteredVenues.map((venue) => (
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
                  {!venue.location.country ||
                  venue.location.country === 'Unknown' ||
                  !venue.location.city ||
                  venue.location.city === 'Unknown' ? (
                    <p>Unknown location</p>
                  ) : (
                    <p>
                      {venue.location.city}, {venue.location.country}
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
