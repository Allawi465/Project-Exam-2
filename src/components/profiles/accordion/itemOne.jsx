import { Link } from 'react-router-dom';
import { Container, Col, Row, Accordion } from 'react-bootstrap';
import { useModel } from '../../../hooks/index';
import { CancelBookingsModel } from '../../index';
import defaultImages from '../../../images/default.jpg';
import { AiFillHeart } from 'react-icons/ai';

function YourBookings({ bookings }) {
  const {
    handleOpenDeleteBooking,
    handleCloseDeleteBooking,
    showDeleteBooking,
    deleteBookingId,
  } = useModel();
  return (
    <>
      <Accordion.Body className="profile-bookings">
        <Container>
          <Row>
            {bookings && bookings.length > 0 ? (
              <Container>
                <Row>
                  {bookings.map((booking) => (
                    <Col xs={12} sm={6} md={6} lg={4} key={booking.id}>
                      <div
                        to={`/venue/${booking.venue.id}`}
                        className="profile-bookings-container mb-3"
                      >
                        <Link
                          className="profile-bookings-container-img"
                          to={`/venue/${booking.venue.id}`}
                        >
                          {booking.venue.media &&
                          booking.venue.media.length > 0 ? (
                            <img
                              src={booking.venue.media[0]}
                              alt={booking.venue.name}
                              onError={(e) => {
                                e.target.src = defaultImages;
                              }}
                            />
                          ) : (
                            <img
                              src={defaultImages}
                              alt={`${booking.venue.name} default`}
                            />
                          )}
                        </Link>
                        <div className="profile-bookings-container-info">
                          <Link
                            to={`/venue/${booking.venue.id}`}
                            className="profile-bookings-container-info-link"
                          >
                            <div className="profile-bookings-container-info-title">
                              <h2 className="my-2 h6 card-title-title">
                                {booking.venue.name}
                              </h2>
                              {booking.venue.rating > 0 && (
                                <div className="venue-detail-rating ms-2">
                                  <AiFillHeart />{' '}
                                  <span>{booking.venue.rating}</span>
                                </div>
                              )}
                            </div>
                            <span>
                              {!booking.venue.location.country ||
                              booking.venue.location.country === 'Unknown' ||
                              !booking.venue.location.city ||
                              booking.venue.location.city === 'Unknown' ? (
                                <span>Unknown location</span>
                              ) : (
                                <span>
                                  {booking.venue.location.country},{' '}
                                  {booking.venue.location.city}
                                </span>
                              )}
                            </span>
                            <div className="mt-2">
                              <h3 className="h5">Date</h3>
                              <p className="mb-0">
                                {new Date(booking.dateFrom)
                                  .toLocaleDateString()
                                  .slice(0, -2)}{' '}
                                -{' '}
                                {new Date(booking.dateTo)
                                  .toLocaleDateString()
                                  .slice(0, -2)}
                              </p>
                            </div>
                          </Link>
                          <div className="profile-bookings-container-btn mt-2">
                            {new Date(booking.dateFrom) > new Date() && (
                              <button
                                onClick={() =>
                                  handleOpenDeleteBooking(booking.id)
                                }
                              >
                                Cancel bookings
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            ) : (
              <p>No bookings yet...</p>
            )}
          </Row>
          {showDeleteBooking && (
            <CancelBookingsModel
              show={showDeleteBooking}
              onClose={handleCloseDeleteBooking}
              id={deleteBookingId}
            />
          )}
        </Container>
      </Accordion.Body>
    </>
  );
}

export default YourBookings;
