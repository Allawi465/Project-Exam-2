import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useGetApi, useHelmet } from '../../hooks/index';
import { Loading, ErrorMessage } from '../../components';
import { BsChevronLeft } from 'react-icons/bs';
import { Bookings } from '../../components';

/**
 * Component for rendering the booking page
 * @component
 * @property {function} useHelmet A function to show the meta and title
 * @property {function} useGetApi A hook for get API
 * @property {function} ErrorMessage A function to display error message if api return error
 * @property {function} Loading A function to display spinner when api load
 * @property {function} Bookings A function to display booking components
 * @returns {JSX.ReactElement} Booking page component
 */

function Booking() {
  let { id } = useParams();

  const { data, isLoading, isError } = useGetApi(
    `/venues/${id}?_owner=true&_bookings=true`
  );

  const title = data.name ? `book ${data.name} | Holidaze` : 'Book | Holidaze';

  const bookingsMeta = useHelmet({
    title,
    description: `Book ${data.name} on Holidaze. View photos, check location, price, and check in the dates`,
    keywords:
      'Holidaze, venue bookings, rentals, venue availability, venue location',
  });

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
      {bookingsMeta}
      <Container className="mt-3">
        <div>
          <Link className="return-Link" to={`/venue/${data.id}`}>
            <BsChevronLeft className="mb-1 me-2" /> Return {data.name}
          </Link>
        </div>
        <Bookings data={data} />
      </Container>
    </>
  );
}

export default Booking;
